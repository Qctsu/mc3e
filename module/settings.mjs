import { ModuleArtConfig } from "./module-art.mjs";

/**
 * Register all of the system's settings.
 */
export default function registerSystemSettings() {
  // Internal System Migration Version
  game.settings.register("mc3e", "systemMigrationVersion", {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: String,
    default: ""
  });

  // Rest Recovery Rules
  game.settings.register("mc3e", "restVariant", {
    name: "SETTINGS.5eRestN",
    hint: "SETTINGS.5eRestL",
    scope: "world",
    config: true,
    default: "normal",
    type: String,
    choices: {
      normal: "SETTINGS.5eRestPHB",
      gritty: "SETTINGS.5eRestGritty",
      epic: "SETTINGS.5eRestEpic"
    }
  });

  // Diagonal Movement Rule
  game.settings.register("mc3e", "diagonalMovement", {
    name: "SETTINGS.5eDiagN",
    hint: "SETTINGS.5eDiagL",
    scope: "world",
    config: true,
    default: "555",
    type: String,
    choices: {
      555: "SETTINGS.5eDiagPHB",
      5105: "SETTINGS.5eDiagDMG",
      EUCL: "SETTINGS.5eDiagEuclidean"
    },
    onChange: rule => canvas.grid.diagonalRule = rule
  });

  // Proficiency modifier type
  game.settings.register("mc3e", "proficiencyModifier", {
    name: "SETTINGS.5eProfN",
    hint: "SETTINGS.5eProfL",
    scope: "world",
    config: true,
    default: "bonus",
    type: String,
    choices: {
      bonus: "SETTINGS.5eProfBonus",
      dice: "SETTINGS.5eProfDice"
    }
  });

  // Use Honor ability score
  game.settings.register("mc3e", "honorScore", {
    name: "SETTINGS.5eHonorN",
    hint: "SETTINGS.5eHonorL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true
  });

  // Use Sanity ability score
  game.settings.register("mc3e", "sanityScore", {
    name: "SETTINGS.5eSanityN",
    hint: "SETTINGS.5eSanityL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true
  });

  // Apply Dexterity as Initiative Tiebreaker
  game.settings.register("mc3e", "initiativeDexTiebreaker", {
    name: "SETTINGS.5eInitTBN",
    hint: "SETTINGS.5eInitTBL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Record Currency Weight
  game.settings.register("mc3e", "currencyWeight", {
    name: "SETTINGS.5eCurWtN",
    hint: "SETTINGS.5eCurWtL",
    scope: "world",
    config: true,
    default: true,
    type: Boolean
  });

  // Disable Experience Tracking
  game.settings.register("mc3e", "disableExperienceTracking", {
    name: "SETTINGS.5eNoExpN",
    hint: "SETTINGS.5eNoExpL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Disable Advancements
  game.settings.register("mc3e", "disableAdvancements", {
    name: "SETTINGS.5eNoAdvancementsN",
    hint: "SETTINGS.5eNoAdvancementsL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Collapse Item Cards (by default)
  game.settings.register("mc3e", "autoCollapseItemCards", {
    name: "SETTINGS.5eAutoCollapseCardN",
    hint: "SETTINGS.5eAutoCollapseCardL",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: s => {
      ui.chat.render();
    }
  });

  // Allow Polymorphing
  game.settings.register("mc3e", "allowPolymorphing", {
    name: "SETTINGS.5eAllowPolymorphingN",
    hint: "SETTINGS.5eAllowPolymorphingL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Polymorph Settings
  game.settings.register("mc3e", "polymorphSettings", {
    scope: "client",
    default: {
      keepPhysical: false,
      keepMental: false,
      keepSaves: false,
      keepSkills: false,
      mergeSaves: false,
      mergeSkills: false,
      keepClass: false,
      keepFeats: false,
      keepSpells: false,
      keepItems: false,
      keepBio: false,
      keepVision: true,
      keepSelf: false,
      keepAE: false,
      keepOriginAE: true,
      keepOtherOriginAE: true,
      keepFeatAE: true,
      keepSpellAE: true,
      keepEquipmentAE: true,
      keepClassAE: true,
      keepBackgroundAE: true,
      transformTokens: true
    }
  });

  // Metric Unit Weights
  game.settings.register("mc3e", "metricWeightUnits", {
    name: "SETTINGS.5eMetricN",
    hint: "SETTINGS.5eMetricL",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  // Critical Damage Modifiers
  game.settings.register("mc3e", "criticalDamageModifiers", {
    name: "SETTINGS.5eCriticalModifiersN",
    hint: "SETTINGS.5eCriticalModifiersL",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  // Critical Damage Maximize
  game.settings.register("mc3e", "criticalDamageMaxDice", {
    name: "SETTINGS.5eCriticalMaxDiceN",
    hint: "SETTINGS.5eCriticalMaxDiceL",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  // Strict validation
  game.settings.register("mc3e", "strictValidation", {
    scope: "world",
    config: false,
    type: Boolean,
    default: true
  });

  // Dynamic art.
  game.settings.registerMenu("mc3e", "moduleArtConfiguration", {
    name: "mc3e.ModuleArtConfigN",
    label: "mc3e.ModuleArtConfigL",
    hint: "mc3e.ModuleArtConfigH",
    icon: "fa-solid fa-palette",
    type: ModuleArtConfig,
    restricted: true
  });

  game.settings.register("mc3e", "moduleArtConfiguration", {
    name: "Module Art Configuration",
    scope: "world",
    config: false,
    type: Object,
    default: {
      mc3e: {
        portraits: true,
        tokens: true
      }
    }
  });
}
