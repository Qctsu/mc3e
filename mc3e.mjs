/**
 * The mc3e game system for Foundry Virtual Tabletop
 * A system for playing the fifth edition of the world's most popular role-playing game.
 * Author: Atropos
 * Software License: MIT
 * Content License: https://www.dndbeyond.com/attachments/39j2li89/SRD5.1-CCBY4.0License.pdf
 * Repository: https://github.com/foundryvtt/mc3e
 * Issue Tracker: https://github.com/foundryvtt/mc3e/issues
 */

// Import Configuration
import mc3e from "./module/config.mjs";
import registerSystemSettings from "./module/settings.mjs";

// Import Submodules
import * as applications from "./module/applications/_module.mjs";
import * as canvas from "./module/canvas/_module.mjs";
import * as dataModels from "./module/data/_module.mjs";
import * as dice from "./module/dice/_module.mjs";
import * as documents from "./module/documents/_module.mjs";
import * as migrations from "./module/migration.mjs";
import * as utils from "./module/utils.mjs";
import {ModuleArt} from "./module/module-art.mjs";

/* -------------------------------------------- */
/*  Define Module Structure                     */
/* -------------------------------------------- */

globalThis.mc3e = {
  applications,
  canvas,
  config: mc3e,
  dataModels,
  dice,
  documents,
  migrations,
  utils
};

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", function() {
  globalThis.mc3e = game.mc3e = Object.assign(game.system, globalThis.mc3e);
  console.log(`mc3e | Initializing the mc3e Game System - Version ${mc3e.version}\n${mc3e.ASCII}`);

  /** @deprecated */
  Object.defineProperty(mc3e, "entities", {
    get() {
      foundry.utils.logCompatibilityWarning(
        "You are referencing the 'mc3e.entities' property which has been deprecated and renamed to "
        + "'mc3e.documents'. Support for this old path will be removed in a future version.",
        { since: "mc3e 2.0", until: "mc3e 2.2" }
      );
      return mc3e.documents;
    }
  });

  /** @deprecated */
  Object.defineProperty(mc3e, "rollItemMacro", {
    get() {
      foundry.utils.logCompatibilityWarning(
        "You are referencing the 'mc3e.rollItemMacro' method which has been deprecated and renamed to "
        + "'mc3e.documents.macro.rollItem'. Support for this old path will be removed in a future version.",
        { since: "mc3e 2.0", until: "mc3e 2.2" }
      );
      return mc3e.documents.macro.rollItem;
    }
  });

  /** @deprecated */
  Object.defineProperty(mc3e, "macros", {
    get() {
      foundry.utils.logCompatibilityWarning(
        "You are referencing the 'mc3e.macros' property which has been deprecated and renamed to "
        + "'mc3e.documents.macro'. Support for this old path will be removed in a future version.",
        { since: "mc3e 2.0", until: "mc3e 2.2" }
      );
      return mc3e.documents.macro;
    }
  });

  // Record Configuration Values
  CONFIG.mc3e = mc3e;
  CONFIG.ActiveEffect.documentClass = documents.ActiveEffect5e;
  CONFIG.Actor.documentClass = documents.Actor5e;
  CONFIG.Item.documentClass = documents.Item5e;
  CONFIG.Token.documentClass = documents.TokenDocument5e;
  CONFIG.Token.objectClass = canvas.Token5e;
  CONFIG.time.roundTime = 6;
  CONFIG.Dice.DamageRoll = dice.DamageRoll;
  CONFIG.Dice.D20Roll = dice.D20Roll;
  CONFIG.MeasuredTemplate.defaults.angle = 53.13; // 5e cone RAW should be 53.13 degrees
  CONFIG.ui.combat = applications.combat.CombatTracker5e;

  // Register System Settings
  registerSystemSettings();

  // Validation strictness.
  _determineValidationStrictness();

  // Configure module art.
  game.mc3e.moduleArt = new ModuleArt();

  // Remove honor & sanity from configuration if they aren't enabled
  if ( !game.settings.get("mc3e", "honorScore") ) {
    delete mc3e.abilities.hon;
    delete mc3e.abilityAbbreviations.hon;
  }
  if ( !game.settings.get("mc3e", "sanityScore") ) {
    delete mc3e.abilities.san;
    delete mc3e.abilityAbbreviations.san;
  }

  // Patch Core Functions
  Combatant.prototype.getInitiativeRoll = documents.combat.getInitiativeRoll;

  // Register Roll Extensions
  CONFIG.Dice.rolls.push(dice.D20Roll);
  CONFIG.Dice.rolls.push(dice.DamageRoll);

  // Hook up system data types
  CONFIG.Actor.systemDataModels = dataModels.actor.config;
  CONFIG.Item.systemDataModels = dataModels.item.config;
  CONFIG.JournalEntryPage.systemDataModels = dataModels.journal.config;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("mc3e", applications.actor.ActorSheet5eCharacter, {
    types: ["character"],
    makeDefault: true,
    label: "mc3e.SheetClassCharacter"
  });
  Actors.registerSheet("mc3e", applications.actor.ActorSheet5eNPC, {
    types: ["npc"],
    makeDefault: true,
    label: "mc3e.SheetClassNPC"
  });
  Actors.registerSheet("mc3e", applications.actor.ActorSheet5eVehicle, {
    types: ["vehicle"],
    makeDefault: true,
    label: "mc3e.SheetClassVehicle"
  });
  Actors.registerSheet("mc3e", applications.actor.GroupActorSheet, {
    types: ["group"],
    makeDefault: true,
    label: "mc3e.SheetClassGroup"
  });

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("mc3e", applications.item.ItemSheet5e, {
    makeDefault: true,
    label: "mc3e.SheetClassItem"
  });
  DocumentSheetConfig.registerSheet(JournalEntryPage, "mc3e", applications.journal.JournalClassPageSheet, {
    label: "mc3e.SheetClassClassSummary",
    types: ["class"]
  });

  // Preload Handlebars helpers & partials
  utils.registerHandlebarsHelpers();
  utils.preloadHandlebarsTemplates();
});

/**
 * Determine if this is a 'legacy' world with permissive validation, or one where strict validation is enabled.
 * @internal
 */
function _determineValidationStrictness() {
  dataModels.SystemDataModel._enableV10Validation = game.settings.get("mc3e", "strictValidation");
}

/**
 * Update the world's validation strictness setting based on whether validation errors were encountered.
 * @internal
 */
async function _configureValidationStrictness() {
  if ( !game.user.isGM ) return;
  const invalidDocuments = game.actors.invalidDocumentIds.size + game.items.invalidDocumentIds.size;
  const strictValidation = game.settings.get("mc3e", "strictValidation");
  if ( invalidDocuments && strictValidation ) {
    await game.settings.set("mc3e", "strictValidation", false);
    game.socket.emit("reload");
    foundry.utils.debouncedReload();
  }
}

/* -------------------------------------------- */
/*  Foundry VTT Setup                           */
/* -------------------------------------------- */

/**
 * Prepare attribute lists.
 */
Hooks.once("setup", function() {
  CONFIG.mc3e.trackableAttributes = expandAttributeList(CONFIG.mc3e.trackableAttributes);
  CONFIG.mc3e.consumableResources = expandAttributeList(CONFIG.mc3e.consumableResources);
  game.mc3e.moduleArt.registerModuleArt();
});

/* --------------------------------------------- */

/**
 * Expand a list of attribute paths into an object that can be traversed.
 * @param {string[]} attributes  The initial attributes configuration.
 * @returns {object}  The expanded object structure.
 */
function expandAttributeList(attributes) {
  return attributes.reduce((obj, attr) => {
    foundry.utils.setProperty(obj, attr, true);
    return obj;
  }, {});
}

/* --------------------------------------------- */

/**
 * Perform one-time pre-localization and sorting of some configuration objects
 */
Hooks.once("i18nInit", () => utils.performPreLocalization(CONFIG.mc3e));

/* -------------------------------------------- */
/*  Foundry VTT Ready                           */
/* -------------------------------------------- */

/**
 * Once the entire VTT framework is initialized, check to see if we should perform a data migration
 */
Hooks.once("ready", function() {
  // Configure validation strictness.
  _configureValidationStrictness();

  // Apply custom compendium styles to the SRD rules compendium.
  const rules = game.packs.get("mc3e.rules");
  rules.apps = [new applications.journal.SRDCompendium(rules)];

  // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
  Hooks.on("hotbarDrop", (bar, data, slot) => {
    if ( ["Item", "ActiveEffect"].includes(data.type) ) {
      documents.macro.create5eMacro(data, slot);
      return false;
    }
  });

  // Determine whether a system migration is required and feasible
  if ( !game.user.isGM ) return;
  const cv = game.settings.get("mc3e", "systemMigrationVersion") || game.world.flags.mc3e?.version;
  const totalDocuments = game.actors.size + game.scenes.size + game.items.size;
  if ( !cv && totalDocuments === 0 ) return game.settings.set("mc3e", "systemMigrationVersion", game.system.version);
  if ( cv && !isNewerVersion(game.system.flags.needsMigrationVersion, cv) ) return;

  // Perform the migration
  if ( cv && isNewerVersion(game.system.flags.compatibleMigrationVersion, cv) ) {
    ui.notifications.error(game.i18n.localize("MIGRATION.5eVersionTooOldWarning"), {permanent: true});
  }
  migrations.migrateWorld();
});

/* -------------------------------------------- */
/*  Canvas Initialization                       */
/* -------------------------------------------- */

Hooks.on("canvasInit", gameCanvas => {
  gameCanvas.grid.diagonalRule = game.settings.get("mc3e", "diagonalMovement");
  SquareGrid.prototype.measureDistances = canvas.measureDistances;
});

/* -------------------------------------------- */
/*  Other Hooks                                 */
/* -------------------------------------------- */

Hooks.on("renderChatMessage", documents.chat.onRenderChatMessage);
Hooks.on("getChatLogEntryContext", documents.chat.addChatMessageContextOptions);

Hooks.on("renderChatLog", (app, html, data) => documents.Item5e.chatListeners(html));
Hooks.on("renderChatPopout", (app, html, data) => documents.Item5e.chatListeners(html));
Hooks.on("getActorDirectoryEntryContext", documents.Actor5e.addDirectoryContextOptions);

/* -------------------------------------------- */
/*  Bundled Module Exports                      */
/* -------------------------------------------- */

export {
  applications,
  canvas,
  dataModels,
  dice,
  documents,
  migrations,
  utils,
  mc3e
};
