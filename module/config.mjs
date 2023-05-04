import * as advancement from "./documents/advancement/_module.mjs";
import { preLocalize } from "./utils.mjs";

// Namespace Configuration Values
const mc3e = {};

// ASCII Artwork
mc3e.ASCII = `_______________________________
______      ______ _____ _____
|  _  \\___  |  _  \\  ___|  ___|
| | | ( _ ) | | | |___ \\| |__
| | | / _ \\/\\ | | |   \\ \\  __|
| |/ / (_>  < |/ //\\__/ / |___
|___/ \\___/\\/___/ \\____/\\____/
_______________________________`;

/**
 * The set of Ability Scores used within the system.
 * @enum {string}
 */
mc3e.abilities = {
  str: "mc3e.AbilityStr",
  dex: "mc3e.AbilityDex",
  con: "mc3e.AbilityCon",
  int: "mc3e.AbilityInt",
  wis: "mc3e.AbilityWis",
  cha: "mc3e.AbilityCha",
  hon: "mc3e.AbilityHon",
  san: "mc3e.AbilitySan"
};
preLocalize("abilities");

/**
 * Localized abbreviations for Ability Scores.
 * @enum {string}
 */
mc3e.abilityAbbreviations = {
  str: "mc3e.AbilityStrAbbr",
  dex: "mc3e.AbilityDexAbbr",
  con: "mc3e.AbilityConAbbr",
  int: "mc3e.AbilityIntAbbr",
  wis: "mc3e.AbilityWisAbbr",
  cha: "mc3e.AbilityChaAbbr",
  hon: "mc3e.AbilityHonAbbr",
  san: "mc3e.AbilitySanAbbr"
};
preLocalize("abilityAbbreviations");

/**
 * Configure which ability score is used as the default modifier for initiative rolls.
 * @type {string}
 */
mc3e.initiativeAbility = "dex";

/**
 * Configure which ability score is used when calculating hit points per level.
 * @type {string}
 */
mc3e.hitPointsAbility = "con";

/* -------------------------------------------- */

/**
 * Configuration data for skills.
 *
 * @typedef {object} SkillConfiguration
 * @property {string} label    Localized label.
 * @property {string} ability  Key for the default ability used by this skill.
 */

/**
 * The set of skill which can be trained with their default ability scores.
 * @enum {SkillConfiguration}
 */
mc3e.skills = {
  acr: { label: "mc3e.SkillAcr", ability: "dex" },
  ani: { label: "mc3e.SkillAni", ability: "wis" },
  arc: { label: "mc3e.SkillArc", ability: "int" },
  ath: { label: "mc3e.SkillAth", ability: "str" },
  dec: { label: "mc3e.SkillDec", ability: "cha" },
  his: { label: "mc3e.SkillHis", ability: "int" },
  ins: { label: "mc3e.SkillIns", ability: "wis" },
  itm: { label: "mc3e.SkillItm", ability: "cha" },
  inv: { label: "mc3e.SkillInv", ability: "int" },
  med: { label: "mc3e.SkillMed", ability: "wis" },
  nat: { label: "mc3e.SkillNat", ability: "int" },
  prc: { label: "mc3e.SkillPrc", ability: "wis" },
  prf: { label: "mc3e.SkillPrf", ability: "cha" },
  per: { label: "mc3e.SkillPer", ability: "cha" },
  rel: { label: "mc3e.SkillRel", ability: "int" },
  slt: { label: "mc3e.SkillSlt", ability: "dex" },
  ste: { label: "mc3e.SkillSte", ability: "dex" },
  sur: { label: "mc3e.SkillSur", ability: "wis" }
};
preLocalize("skills", { key: "label", sort: true });
patchConfig("skills", "label", { since: 2.0, until: 2.2 });

/* -------------------------------------------- */

/**
 * Character alignment options.
 * @enum {string}
 */
mc3e.alignments = {
  lg: "mc3e.AlignmentLG",
  ng: "mc3e.AlignmentNG",
  cg: "mc3e.AlignmentCG",
  ln: "mc3e.AlignmentLN",
  tn: "mc3e.AlignmentTN",
  cn: "mc3e.AlignmentCN",
  le: "mc3e.AlignmentLE",
  ne: "mc3e.AlignmentNE",
  ce: "mc3e.AlignmentCE"
};
preLocalize("alignments");

/* -------------------------------------------- */

/**
 * An enumeration of item attunement types.
 * @enum {number}
 */
mc3e.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2
};

/**
 * An enumeration of item attunement states.
 * @type {{"0": string, "1": string, "2": string}}
 */
mc3e.attunements = {
  0: "mc3e.AttunementNone",
  1: "mc3e.AttunementRequired",
  2: "mc3e.AttunementAttuned"
};
preLocalize("attunements");

/* -------------------------------------------- */

/**
 * General weapon categories.
 * @enum {string}
 */
mc3e.weaponProficiencies = {
  sim: "mc3e.WeaponSimpleProficiency",
  mar: "mc3e.WeaponMartialProficiency"
};
preLocalize("weaponProficiencies");

/**
 * A mapping between `mc3e.weaponTypes` and `mc3e.weaponProficiencies` that
 * is used to determine if character has proficiency when adding an item.
 * @enum {(boolean|string)}
 */
mc3e.weaponProficienciesMap = {
  natural: true,
  simpleM: "sim",
  simpleR: "sim",
  martialM: "mar",
  martialR: "mar"
};

/**
 * The basic weapon types in 5e. This enables specific weapon proficiencies or
 * starting equipment provided by classes and backgrounds.
 * @enum {string}
 */
mc3e.weaponIds = {
  battleaxe: "I0WocDSuNpGJayPb",
  blowgun: "wNWK6yJMHG9ANqQV",
  club: "nfIRTECQIG81CvM4",
  dagger: "0E565kQUBmndJ1a2",
  dart: "3rCO8MTIdPGSW6IJ",
  flail: "UrH3sMdnUDckIHJ6",
  glaive: "rOG1OM2ihgPjOvFW",
  greataxe: "1Lxk6kmoRhG8qQ0u",
  greatclub: "QRCsxkCwWNwswL9o",
  greatsword: "xMkP8BmFzElcsMaR",
  halberd: "DMejWAc8r8YvDPP1",
  handaxe: "eO7Fbv5WBk5zvGOc",
  handcrossbow: "qaSro7kFhxD6INbZ",
  heavycrossbow: "RmP0mYRn2J7K26rX",
  javelin: "DWLMnODrnHn8IbAG",
  lance: "RnuxdHUAIgxccVwj",
  lightcrossbow: "ddWvQRLmnnIS0eLF",
  lighthammer: "XVK6TOL4sGItssAE",
  longbow: "3cymOVja8jXbzrdT",
  longsword: "10ZP2Bu3vnCuYMIB",
  mace: "Ajyq6nGwF7FtLhDQ",
  maul: "DizirD7eqjh8n95A",
  morningstar: "dX8AxCh9o0A9CkT3",
  net: "aEiM49V8vWpWw7rU",
  pike: "tC0kcqZT9HHAO0PD",
  quarterstaff: "g2dWN7PQiMRYWzyk",
  rapier: "Tobce1hexTnDk4sV",
  scimitar: "fbC0Mg1a73wdFbqO",
  shortsword: "osLzOwQdPtrK3rQH",
  sickle: "i4NeNZ30ycwPDHMx",
  spear: "OG4nBBydvmfWYXIk",
  shortbow: "GJv6WkD7D2J6rP6M",
  sling: "3gynWO9sN4OLGMWD",
  trident: "F65ANO66ckP8FDMa",
  warpick: "2YdfjN1PIIrSHZii",
  warhammer: "F0Df164Xv1gWcYt0",
  whip: "QKTyxoO0YDnAsbYe"
};

/* -------------------------------------------- */

/**
 * The categories into which Tool items can be grouped.
 *
 * @enum {string}
 */
mc3e.toolTypes = {
  art: "mc3e.ToolArtisans",
  game: "mc3e.ToolGamingSet",
  music: "mc3e.ToolMusicalInstrument"
};
preLocalize("toolTypes", { sort: true });

/**
 * The categories of tool proficiencies that a character can gain.
 *
 * @enum {string}
 */
mc3e.toolProficiencies = {
  ...mc3e.toolTypes,
  vehicle: "mc3e.ToolVehicle"
};
preLocalize("toolProficiencies", { sort: true });

/**
 * The basic tool types in 5e. This enables specific tool proficiencies or
 * starting equipment provided by classes and backgrounds.
 * @enum {string}
 */
mc3e.toolIds = {
  alchemist: "SztwZhbhZeCqyAes",
  bagpipes: "yxHi57T5mmVt0oDr",
  brewer: "Y9S75go1hLMXUD48",
  calligrapher: "jhjo20QoiD5exf09",
  card: "YwlHI3BVJapz4a3E",
  carpenter: "8NS6MSOdXtUqD7Ib",
  cartographer: "fC0lFK8P4RuhpfaU",
  chess: "23y8FvWKf9YLcnBL",
  cobbler: "hM84pZnpCqKfi8XH",
  cook: "Gflnp29aEv5Lc1ZM",
  dice: "iBuTM09KD9IoM5L8",
  disg: "IBhDAr7WkhWPYLVn",
  drum: "69Dpr25pf4BjkHKb",
  dulcimer: "NtdDkjmpdIMiX7I2",
  flute: "eJOrPcAz9EcquyRQ",
  forg: "cG3m4YlHfbQlLEOx",
  glassblower: "rTbVrNcwApnuTz5E",
  herb: "i89okN7GFTWHsvPy",
  horn: "aa9KuBy4dst7WIW9",
  jeweler: "YfBwELTgPFHmQdHh",
  leatherworker: "PUMfwyVUbtyxgYbD",
  lute: "qBydtUUIkv520DT7",
  lyre: "EwG1EtmbgR3bM68U",
  mason: "skUih6tBvcBbORzA",
  navg: "YHCmjsiXxZ9UdUhU",
  painter: "ccm5xlWhx74d6lsK",
  panflute: "G5m5gYIx9VAUWC3J",
  pois: "il2GNi8C0DvGLL9P",
  potter: "hJS8yEVkqgJjwfWa",
  shawm: "G3cqbejJpfB91VhP",
  smith: "KndVe2insuctjIaj",
  thief: "woWZ1sO5IUVGzo58",
  tinker: "0d08g1i5WXnNrCNA",
  viol: "baoe3U5BfMMMxhCU",
  weaver: "ap9prThUB2y9lDyj",
  woodcarver: "xKErqkLo4ASYr5EP"
};

/* -------------------------------------------- */

/**
 * The various lengths of time over which effects can occur.
 * @enum {string}
 */
mc3e.timePeriods = {
  inst: "mc3e.TimeInst",
  turn: "mc3e.TimeTurn",
  round: "mc3e.TimeRound",
  minute: "mc3e.TimeMinute",
  hour: "mc3e.TimeHour",
  day: "mc3e.TimeDay",
  month: "mc3e.TimeMonth",
  year: "mc3e.TimeYear",
  perm: "mc3e.TimePerm",
  spec: "mc3e.Special"
};
preLocalize("timePeriods");

/* -------------------------------------------- */

/**
 * Various ways in which an item or ability can be activated.
 * @enum {string}
 */
mc3e.abilityActivationTypes = {
  action: "mc3e.Action",
  bonus: "mc3e.BonusAction",
  reaction: "mc3e.Reaction",
  minute: mc3e.timePeriods.minute,
  hour: mc3e.timePeriods.hour,
  day: mc3e.timePeriods.day,
  special: mc3e.timePeriods.spec,
  legendary: "mc3e.LegendaryActionLabel",
  lair: "mc3e.LairActionLabel",
  crew: "mc3e.VehicleCrewAction"
};
preLocalize("abilityActivationTypes");

/* -------------------------------------------- */

/**
 * Different things that an ability can consume upon use.
 * @enum {string}
 */
mc3e.abilityConsumptionTypes = {
  ammo: "mc3e.ConsumeAmmunition",
  attribute: "mc3e.ConsumeAttribute",
  hitDice: "mc3e.ConsumeHitDice",
  material: "mc3e.ConsumeMaterial",
  charges: "mc3e.ConsumeCharges"
};
preLocalize("abilityConsumptionTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Creature sizes.
 * @enum {string}
 */
mc3e.actorSizes = {
  tiny: "mc3e.SizeTiny",
  sm: "mc3e.SizeSmall",
  med: "mc3e.SizeMedium",
  lg: "mc3e.SizeLarge",
  huge: "mc3e.SizeHuge",
  grg: "mc3e.SizeGargantuan"
};
preLocalize("actorSizes");

/**
 * Default token image size for the values of `mc3e.actorSizes`.
 * @enum {number}
 */
mc3e.tokenSizes = {
  tiny: 0.5,
  sm: 1,
  med: 1,
  lg: 2,
  huge: 3,
  grg: 4
};

/**
 * Colors used to visualize temporary and temporary maximum HP in token health bars.
 * @enum {number}
 */
mc3e.tokenHPColors = {
  damage: 0xFF0000,
  healing: 0x00FF00,
  temp: 0x66CCFF,
  tempmax: 0x440066,
  negmax: 0x550000
};

/* -------------------------------------------- */

/**
 * Default types of creatures.
 * *Note: Not pre-localized to allow for easy fetching of pluralized forms.*
 * @enum {string}
 */
mc3e.creatureTypes = {
  aberration: "mc3e.CreatureAberration",
  beast: "mc3e.CreatureBeast",
  celestial: "mc3e.CreatureCelestial",
  construct: "mc3e.CreatureConstruct",
  dragon: "mc3e.CreatureDragon",
  elemental: "mc3e.CreatureElemental",
  fey: "mc3e.CreatureFey",
  fiend: "mc3e.CreatureFiend",
  giant: "mc3e.CreatureGiant",
  humanoid: "mc3e.CreatureHumanoid",
  monstrosity: "mc3e.CreatureMonstrosity",
  ooze: "mc3e.CreatureOoze",
  plant: "mc3e.CreaturePlant",
  undead: "mc3e.CreatureUndead"
};

/* -------------------------------------------- */

/**
 * Classification types for item action types.
 * @enum {string}
 */
mc3e.itemActionTypes = {
  mwak: "mc3e.ActionMWAK",
  rwak: "mc3e.ActionRWAK",
  msak: "mc3e.ActionMSAK",
  rsak: "mc3e.ActionRSAK",
  save: "mc3e.ActionSave",
  heal: "mc3e.ActionHeal",
  abil: "mc3e.ActionAbil",
  util: "mc3e.ActionUtil",
  other: "mc3e.ActionOther"
};
preLocalize("itemActionTypes");

/* -------------------------------------------- */

/**
 * Different ways in which item capacity can be limited.
 * @enum {string}
 */
mc3e.itemCapacityTypes = {
  items: "mc3e.ItemContainerCapacityItems",
  weight: "mc3e.ItemContainerCapacityWeight"
};
preLocalize("itemCapacityTypes", { sort: true });

/* -------------------------------------------- */

/**
 * List of various item rarities.
 * @enum {string}
 */
mc3e.itemRarity = {
  common: "mc3e.ItemRarityCommon",
  uncommon: "mc3e.ItemRarityUncommon",
  rare: "mc3e.ItemRarityRare",
  veryRare: "mc3e.ItemRarityVeryRare",
  legendary: "mc3e.ItemRarityLegendary",
  artifact: "mc3e.ItemRarityArtifact"
};
preLocalize("itemRarity");

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability.
 * @enum {string}
 */
mc3e.limitedUsePeriods = {
  sr: "mc3e.ShortRest",
  lr: "mc3e.LongRest",
  day: "mc3e.Day",
  charges: "mc3e.Charges"
};
preLocalize("limitedUsePeriods");

/* -------------------------------------------- */

/**
 * Specific equipment types that modify base AC.
 * @enum {string}
 */
mc3e.armorTypes = {
  light: "mc3e.EquipmentLight",
  medium: "mc3e.EquipmentMedium",
  heavy: "mc3e.EquipmentHeavy",
  natural: "mc3e.EquipmentNatural",
  shield: "mc3e.EquipmentShield"
};
preLocalize("armorTypes");

/* -------------------------------------------- */

/**
 * Equipment types that aren't armor.
 * @enum {string}
 */
mc3e.miscEquipmentTypes = {
  clothing: "mc3e.EquipmentClothing",
  trinket: "mc3e.EquipmentTrinket",
  vehicle: "mc3e.EquipmentVehicle"
};
preLocalize("miscEquipmentTypes", { sort: true });

/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can be worn by the character.
 * @enum {string}
 */
mc3e.equipmentTypes = {
  ...mc3e.miscEquipmentTypes,
  ...mc3e.armorTypes
};
preLocalize("equipmentTypes", { sort: true });

/* -------------------------------------------- */

/**
 * The various types of vehicles in which characters can be proficient.
 * @enum {string}
 */
mc3e.vehicleTypes = {
  air: "mc3e.VehicleTypeAir",
  land: "mc3e.VehicleTypeLand",
  space: "mc3e.VehicleTypeSpace",
  water: "mc3e.VehicleTypeWater"
};
preLocalize("vehicleTypes", { sort: true });

/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have.
 * @type {object}
 */
mc3e.armorProficiencies = {
  lgt: mc3e.equipmentTypes.light,
  med: mc3e.equipmentTypes.medium,
  hvy: mc3e.equipmentTypes.heavy,
  shl: "mc3e.EquipmentShieldProficiency"
};
preLocalize("armorProficiencies");

/**
 * A mapping between `mc3e.equipmentTypes` and `mc3e.armorProficiencies` that
 * is used to determine if character has proficiency when adding an item.
 * @enum {(boolean|string)}
 */
mc3e.armorProficienciesMap = {
  natural: true,
  clothing: true,
  light: "lgt",
  medium: "med",
  heavy: "hvy",
  shield: "shl"
};

/**
 * The basic armor types in 5e. This enables specific armor proficiencies,
 * automated AC calculation in NPCs, and starting equipment.
 * @enum {string}
 */
mc3e.armorIds = {
  breastplate: "SK2HATQ4abKUlV8i",
  chainmail: "rLMflzmxpe8JGTOA",
  chainshirt: "p2zChy24ZJdVqMSH",
  halfplate: "vsgmACFYINloIdPm",
  hide: "n1V07puo0RQxPGuF",
  leather: "WwdpHLXGX5r8uZu5",
  padded: "GtKV1b5uqFQqpEni",
  plate: "OjkIqlW2UpgFcjZa",
  ringmail: "nsXZejlmgalj4he9",
  scalemail: "XmnlF5fgIO3tg6TG",
  splint: "cKpJmsJmU8YaiuqG",
  studded: "TIV3B1vbrVHIhQAm"
};

/**
 * The basic shield in 5e.
 * @enum {string}
 */
mc3e.shieldIds = {
  shield: "sSs3hSzkKBMNBgTs"
};

/**
 * Common armor class calculations.
 * @enum {{ label: string, [formula]: string }}
 */
mc3e.armorClasses = {
  flat: {
    label: "mc3e.ArmorClassFlat",
    formula: "@attributes.ac.flat"
  },
  natural: {
    label: "mc3e.ArmorClassNatural",
    formula: "@attributes.ac.flat"
  },
  default: {
    label: "mc3e.ArmorClassEquipment",
    formula: "@attributes.ac.armor + @attributes.ac.dex"
  },
  mage: {
    label: "mc3e.ArmorClassMage",
    formula: "13 + @abilities.dex.mod"
  },
  draconic: {
    label: "mc3e.ArmorClassDraconic",
    formula: "13 + @abilities.dex.mod"
  },
  unarmoredMonk: {
    label: "mc3e.ArmorClassUnarmoredMonk",
    formula: "10 + @abilities.dex.mod + @abilities.wis.mod"
  },
  unarmoredBarb: {
    label: "mc3e.ArmorClassUnarmoredBarbarian",
    formula: "10 + @abilities.dex.mod + @abilities.con.mod"
  },
  custom: {
    label: "mc3e.ArmorClassCustom"
  }
};
preLocalize("armorClasses", { key: "label" });

/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system.
 * @enum {string}
 */
mc3e.consumableTypes = {
  ammo: "mc3e.ConsumableAmmo",
  potion: "mc3e.ConsumablePotion",
  poison: "mc3e.ConsumablePoison",
  food: "mc3e.ConsumableFood",
  scroll: "mc3e.ConsumableScroll",
  wand: "mc3e.ConsumableWand",
  rod: "mc3e.ConsumableRod",
  trinket: "mc3e.ConsumableTrinket"
};
preLocalize("consumableTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Configuration data for an item with the "feature" type.
 *
 * @typedef {object} FeatureTypeConfiguration
 * @property {string} label                       Localized label for this type.
 * @property {Object<string, string>} [subtypes]  Enum containing localized labels for subtypes.
 */

/**
 * Types of "features" items.
 * @enum {FeatureTypeConfiguration}
 */
mc3e.featureTypes = {
  background: {
    label: "mc3e.Feature.Background"
  },
  class: {
    label: "mc3e.Feature.Class",
    subtypes: {
      artificerInfusion: "mc3e.ClassFeature.ArtificerInfusion",
      channelDivinity: "mc3e.ClassFeature.ChannelDivinity",
      defensiveTactic: "mc3e.ClassFeature.DefensiveTactic",
      eldritchInvocation: "mc3e.ClassFeature.EldritchInvocation",
      elementalDiscipline: "mc3e.ClassFeature.ElementalDiscipline",
      fightingStyle: "mc3e.ClassFeature.FightingStyle",
      huntersPrey: "mc3e.ClassFeature.HuntersPrey",
      ki: "mc3e.ClassFeature.Ki",
      maneuver: "mc3e.ClassFeature.Maneuver",
      metamagic: "mc3e.ClassFeature.Metamagic",
      multiattack: "mc3e.ClassFeature.Multiattack",
      pact: "mc3e.ClassFeature.PactBoon",
      psionicPower: "mc3e.ClassFeature.PsionicPower",
      rune: "mc3e.ClassFeature.Rune",
      superiorHuntersDefense: "mc3e.ClassFeature.SuperiorHuntersDefense"
    }
  },
  monster: {
    label: "mc3e.Feature.Monster"
  },
  race: {
    label: "mc3e.Feature.Race"
  },
  feat: {
    label: "mc3e.Feature.Feat"
  }
};
preLocalize("featureTypes", { key: "label" });
preLocalize("featureTypes.class.subtypes", { sort: true });

/* -------------------------------------------- */

/**
 * @typedef {object} CurrencyConfiguration
 * @property {string} label         Localized label for the currency.
 * @property {string} abbreviation  Localized abbreviation for the currency.
 * @property {number} conversion    Number by which this currency should be multiplied to arrive at a standard value.
 */

/**
 * The valid currency denominations with localized labels, abbreviations, and conversions.
 * The conversion number defines how many of that currency are equal to one GP.
 * @enum {CurrencyConfiguration}
 */
mc3e.currencies = {
  pp: {
    label: "mc3e.CurrencyPP",
    abbreviation: "mc3e.CurrencyAbbrPP",
    conversion: 0.1
  },
  gp: {
    label: "mc3e.CurrencyGP",
    abbreviation: "mc3e.CurrencyAbbrGP",
    conversion: 1
  },
  ep: {
    label: "mc3e.CurrencyEP",
    abbreviation: "mc3e.CurrencyAbbrEP",
    conversion: 2
  },
  sp: {
    label: "mc3e.CurrencySP",
    abbreviation: "mc3e.CurrencyAbbrSP",
    conversion: 10
  },
  cp: {
    label: "mc3e.CurrencyCP",
    abbreviation: "mc3e.CurrencyAbbrCP",
    conversion: 100
  }
};
preLocalize("currencies", { keys: ["label", "abbreviation"] });

/* -------------------------------------------- */
/*  Damage Types                                */
/* -------------------------------------------- */

/**
 * Types of damage that are considered physical.
 * @enum {string}
 */
mc3e.physicalDamageTypes = {
  bludgeoning: "mc3e.DamageBludgeoning",
  piercing: "mc3e.DamagePiercing",
  slashing: "mc3e.DamageSlashing"
};
preLocalize("physicalDamageTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Types of damage the can be caused by abilities.
 * @enum {string}
 */
mc3e.damageTypes = {
  ...mc3e.physicalDamageTypes,
  acid: "mc3e.DamageAcid",
  cold: "mc3e.DamageCold",
  fire: "mc3e.DamageFire",
  force: "mc3e.DamageForce",
  lightning: "mc3e.DamageLightning",
  necrotic: "mc3e.DamageNecrotic",
  poison: "mc3e.DamagePoison",
  psychic: "mc3e.DamagePsychic",
  radiant: "mc3e.DamageRadiant",
  thunder: "mc3e.DamageThunder"
};
preLocalize("damageTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Types of damage to which an actor can possess resistance, immunity, or vulnerability.
 * @enum {string}
 * @deprecated
 */
mc3e.damageResistanceTypes = {
  ...mc3e.damageTypes,
  physical: "mc3e.DamagePhysical"
};
preLocalize("damageResistanceTypes", { sort: true });

/* -------------------------------------------- */
/*  Movement                                    */
/* -------------------------------------------- */

/**
 * Different types of healing that can be applied using abilities.
 * @enum {string}
 */
mc3e.healingTypes = {
  healing: "mc3e.Healing",
  temphp: "mc3e.HealingTemp"
};
preLocalize("healingTypes");

/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @enum {string}
 */
mc3e.movementTypes = {
  burrow: "mc3e.MovementBurrow",
  climb: "mc3e.MovementClimb",
  fly: "mc3e.MovementFly",
  swim: "mc3e.MovementSwim",
  walk: "mc3e.MovementWalk"
};
preLocalize("movementTypes", { sort: true });

/* -------------------------------------------- */
/*  Measurement                                 */
/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @enum {string}
 */
mc3e.movementUnits = {
  ft: "mc3e.DistFt",
  mi: "mc3e.DistMi",
  m: "mc3e.DistM",
  km: "mc3e.DistKm"
};
preLocalize("movementUnits");

/* -------------------------------------------- */

/**
 * The types of range that are used for measuring actions and effects.
 * @enum {string}
 */
mc3e.rangeTypes = {
  self: "mc3e.DistSelf",
  touch: "mc3e.DistTouch",
  spec: "mc3e.Special",
  any: "mc3e.DistAny"
};
preLocalize("rangeTypes");

/* -------------------------------------------- */

/**
 * The valid units of measure for the range of an action or effect. A combination of `mc3e.movementUnits` and
 * `mc3e.rangeUnits`.
 * @enum {string}
 */
mc3e.distanceUnits = {
  ...mc3e.movementUnits,
  ...mc3e.rangeTypes
};
preLocalize("distanceUnits");

/* -------------------------------------------- */

/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules.
 * @enum {{ imperial: number, metric: number }}
 */
mc3e.encumbrance = {
  currencyPerWeight: {
    imperial: 50,
    metric: 110
  },
  strMultiplier: {
    imperial: 15,
    metric: 6.8
  },
  vehicleWeightMultiplier: {
    imperial: 2000, // 2000 lbs in an imperial ton
    metric: 1000 // 1000 kg in a metric ton
  }
};

/* -------------------------------------------- */
/*  Targeting                                   */
/* -------------------------------------------- */

/**
 * Targeting types that apply to one or more distinct targets.
 * @enum {string}
 */
mc3e.individualTargetTypes = {
  self: "mc3e.TargetSelf",
  ally: "mc3e.TargetAlly",
  enemy: "mc3e.TargetEnemy",
  creature: "mc3e.TargetCreature",
  object: "mc3e.TargetObject",
  space: "mc3e.TargetSpace"
};
preLocalize("individualTargetTypes");

/* -------------------------------------------- */

/**
 * Information needed to represent different area of effect target types.
 *
 * @typedef {object} AreaTargetDefinition
 * @property {string} label     Localized label for this type.
 * @property {string} template  Type of `MeasuredTemplate` create for this target type.
 */

/**
 * Targeting types that cover an area.
 * @enum {AreaTargetDefinition}
 */
mc3e.areaTargetTypes = {
  radius: {
    label: "mc3e.TargetRadius",
    template: "circle"
  },
  sphere: {
    label: "mc3e.TargetSphere",
    template: "circle"
  },
  cylinder: {
    label: "mc3e.TargetCylinder",
    template: "circle"
  },
  cone: {
    label: "mc3e.TargetCone",
    template: "cone"
  },
  square: {
    label: "mc3e.TargetSquare",
    template: "rect"
  },
  cube: {
    label: "mc3e.TargetCube",
    template: "rect"
  },
  line: {
    label: "mc3e.TargetLine",
    template: "ray"
  },
  wall: {
    label: "mc3e.TargetWall",
    template: "ray"
  }
};
preLocalize("areaTargetTypes", { key: "label", sort: true });
patchConfig("areaTargetTypes", "template", { since: 2.0, until: 2.2 });

/* -------------------------------------------- */

/**
 * The types of single or area targets which can be applied to abilities.
 * @enum {string}
 */
mc3e.targetTypes = {
  ...mc3e.individualTargetTypes,
  ...Object.fromEntries(Object.entries(mc3e.areaTargetTypes).map(([k, v]) => [k, v.label]))
};
preLocalize("targetTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Denominations of hit dice which can apply to classes.
 * @type {string[]}
 */
mc3e.hitDieTypes = ["d4", "d6", "d8", "d10", "d12"];

/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have.
 * @enum {string}
 */
mc3e.senses = {
  blindsight: "mc3e.SenseBlindsight",
  darkvision: "mc3e.SenseDarkvision",
  tremorsense: "mc3e.SenseTremorsense",
  truesight: "mc3e.SenseTruesight"
};
preLocalize("senses", { sort: true });

/* -------------------------------------------- */
/*  Spellcasting                                */
/* -------------------------------------------- */

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {number[][]}
 */
mc3e.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

/**
 * Various different ways a spell can be prepared.
 */
mc3e.spellPreparationModes = {
  prepared: "mc3e.SpellPrepPrepared",
  pact: "mc3e.PactMagic",
  always: "mc3e.SpellPrepAlways",
  atwill: "mc3e.SpellPrepAtWill",
  innate: "mc3e.SpellPrepInnate"
};
preLocalize("spellPreparationModes");

/* -------------------------------------------- */

/**
 * Subset of `mc3e.spellPreparationModes` that consume spell slots.
 * @type {boolean[]}
 */
mc3e.spellUpcastModes = ["always", "pact", "prepared"];

/* -------------------------------------------- */

/**
 * Configuration data for different types of spellcasting supported.
 *
 * @typedef {object} SpellcastingTypeConfiguration
 * @property {string} label                                                        Localized label.
 * @property {Object<string, SpellcastingProgressionConfiguration>} [progression]  Any progression modes for this type.
 */

/**
 * Configuration data for a spellcasting progression mode.
 *
 * @typedef {object} SpellcastingProgressionConfiguration
 * @property {string} label             Localized label.
 * @property {number} [divisor=1]       Value by which the class levels are divided to determine spellcasting level.
 * @property {boolean} [roundUp=false]  Should fractional values should be rounded up by default?
 */

/**
 * Different spellcasting types and their progression.
 * @type {SpellcastingTypeConfiguration}
 */
mc3e.spellcastingTypes = {
  leveled: {
    label: "mc3e.SpellProgLeveled",
    progression: {
      full: {
        label: "mc3e.SpellProgFull",
        divisor: 1
      },
      half: {
        label: "mc3e.SpellProgHalf",
        divisor: 2
      },
      third: {
        label: "mc3e.SpellProgThird",
        divisor: 3
      },
      artificer: {
        label: "mc3e.SpellProgArt",
        divisor: 2,
        roundUp: true
      }
    }
  },
  pact: {
    label: "mc3e.SpellProgPact"
  }
};
preLocalize("spellcastingTypes", { key: "label", sort: true });
preLocalize("spellcastingTypes.leveled.progression", { key: "label" });

/* -------------------------------------------- */

/**
 * Ways in which a class can contribute to spellcasting levels.
 * @enum {string}
 */
mc3e.spellProgression = {
  none: "mc3e.SpellNone",
  full: "mc3e.SpellProgFull",
  half: "mc3e.SpellProgHalf",
  third: "mc3e.SpellProgThird",
  pact: "mc3e.SpellProgPact",
  artificer: "mc3e.SpellProgArt"
};
preLocalize("spellProgression", { key: "label" });

/* -------------------------------------------- */

/**
 * Valid spell levels.
 * @enum {string}
 */
mc3e.spellLevels = {
  0: "mc3e.SpellLevel0",
  1: "mc3e.SpellLevel1",
  2: "mc3e.SpellLevel2",
  3: "mc3e.SpellLevel3",
  4: "mc3e.SpellLevel4",
  5: "mc3e.SpellLevel5",
  6: "mc3e.SpellLevel6",
  7: "mc3e.SpellLevel7",
  8: "mc3e.SpellLevel8",
  9: "mc3e.SpellLevel9"
};
preLocalize("spellLevels");

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed.
 * @enum {string}
 */
mc3e.spellScalingModes = {
  none: "mc3e.SpellNone",
  cantrip: "mc3e.SpellCantrip",
  level: "mc3e.SpellLevel"
};
preLocalize("spellScalingModes", { sort: true });

/* -------------------------------------------- */

/**
 * Types of components that can be required when casting a spell.
 * @enum {object}
 */
mc3e.spellComponents = {
  vocal: {
    label: "mc3e.ComponentVerbal",
    abbr: "mc3e.ComponentVerbalAbbr"
  },
  somatic: {
    label: "mc3e.ComponentSomatic",
    abbr: "mc3e.ComponentSomaticAbbr"
  },
  material: {
    label: "mc3e.ComponentMaterial",
    abbr: "mc3e.ComponentMaterialAbbr"
  }
};
preLocalize("spellComponents", {keys: ["label", "abbr"]});

/* -------------------------------------------- */

/**
 * Supplementary rules keywords that inform a spell's use.
 * @enum {object}
 */
mc3e.spellTags = {
  concentration: {
    label: "mc3e.Concentration",
    abbr: "mc3e.ConcentrationAbbr"
  },
  ritual: {
    label: "mc3e.Ritual",
    abbr: "mc3e.RitualAbbr"
  }
};
preLocalize("spellTags", {keys: ["label", "abbr"]});

/* -------------------------------------------- */

/**
 * Schools to which a spell can belong.
 * @enum {string}
 */
mc3e.spellSchools = {
  abj: "mc3e.SchoolAbj",
  con: "mc3e.SchoolCon",
  div: "mc3e.SchoolDiv",
  enc: "mc3e.SchoolEnc",
  evo: "mc3e.SchoolEvo",
  ill: "mc3e.SchoolIll",
  nec: "mc3e.SchoolNec",
  trs: "mc3e.SchoolTrs"
};
preLocalize("spellSchools", { sort: true });

/* -------------------------------------------- */

/**
 * Spell scroll item ID within the `mc3e.sourcePacks` compendium for each level.
 * @enum {string}
 */
mc3e.spellScrollIds = {
  0: "rQ6sO7HDWzqMhSI3",
  1: "9GSfMg0VOA2b4uFN",
  2: "XdDp6CKh9qEvPTuS",
  3: "hqVKZie7x9w3Kqds",
  4: "DM7hzgL836ZyUFB1",
  5: "wa1VF8TXHmkrrR35",
  6: "tI3rWx4bxefNCexS",
  7: "mtyw4NS1s7j2EJaD",
  8: "aOrinPg7yuDZEuWr",
  9: "O4YbkJkLlnsgUszZ"
};

/* -------------------------------------------- */
/*  Weapon Details                              */
/* -------------------------------------------- */

/**
 * The set of types which a weapon item can take.
 * @enum {string}
 */
mc3e.weaponTypes = {
  simpleM: "mc3e.WeaponSimpleM",
  simpleR: "mc3e.WeaponSimpleR",
  martialM: "mc3e.WeaponMartialM",
  martialR: "mc3e.WeaponMartialR",
  natural: "mc3e.WeaponNatural",
  improv: "mc3e.WeaponImprov",
  siege: "mc3e.WeaponSiege"
};
preLocalize("weaponTypes");

/* -------------------------------------------- */

/**
 * A subset of weapon properties that determine the physical characteristics of the weapon.
 * These properties are used for determining physical resistance bypasses.
 * @enum {string}
 */
mc3e.physicalWeaponProperties = {
  ada: "mc3e.WeaponPropertiesAda",
  mgc: "mc3e.WeaponPropertiesMgc",
  sil: "mc3e.WeaponPropertiesSil"
};
preLocalize("physicalWeaponProperties", { sort: true });

/* -------------------------------------------- */

/**
 * The set of weapon property flags which can exist on a weapon.
 * @enum {string}
 */
mc3e.weaponProperties = {
  ...mc3e.physicalWeaponProperties,
  amm: "mc3e.WeaponPropertiesAmm",
  fin: "mc3e.WeaponPropertiesFin",
  fir: "mc3e.WeaponPropertiesFir",
  foc: "mc3e.WeaponPropertiesFoc",
  hvy: "mc3e.WeaponPropertiesHvy",
  lgt: "mc3e.WeaponPropertiesLgt",
  lod: "mc3e.WeaponPropertiesLod",
  rch: "mc3e.WeaponPropertiesRch",
  rel: "mc3e.WeaponPropertiesRel",
  ret: "mc3e.WeaponPropertiesRet",
  spc: "mc3e.WeaponPropertiesSpc",
  thr: "mc3e.WeaponPropertiesThr",
  two: "mc3e.WeaponPropertiesTwo",
  ver: "mc3e.WeaponPropertiesVer"
};
preLocalize("weaponProperties", { sort: true });

/* -------------------------------------------- */

/**
 * Compendium packs used for localized items.
 * @enum {string}
 */
mc3e.sourcePacks = {
  ITEMS: "mc3e.items"
};

/* -------------------------------------------- */

/**
 * Settings to configure how actors are merged when polymorphing is applied.
 * @enum {string}
 */
mc3e.polymorphSettings = {
  keepPhysical: "mc3e.PolymorphKeepPhysical",
  keepMental: "mc3e.PolymorphKeepMental",
  keepSaves: "mc3e.PolymorphKeepSaves",
  keepSkills: "mc3e.PolymorphKeepSkills",
  mergeSaves: "mc3e.PolymorphMergeSaves",
  mergeSkills: "mc3e.PolymorphMergeSkills",
  keepClass: "mc3e.PolymorphKeepClass",
  keepFeats: "mc3e.PolymorphKeepFeats",
  keepSpells: "mc3e.PolymorphKeepSpells",
  keepItems: "mc3e.PolymorphKeepItems",
  keepBio: "mc3e.PolymorphKeepBio",
  keepVision: "mc3e.PolymorphKeepVision",
  keepSelf: "mc3e.PolymorphKeepSelf"
};
preLocalize("polymorphSettings", { sort: true });

/**
 * Settings to configure how actors are effects are merged when polymorphing is applied.
 * @enum {string}
 */
mc3e.polymorphEffectSettings = {
  keepAE: "mc3e.PolymorphKeepAE",
  keepOtherOriginAE: "mc3e.PolymorphKeepOtherOriginAE",
  keepOriginAE: "mc3e.PolymorphKeepOriginAE",
  keepEquipmentAE: "mc3e.PolymorphKeepEquipmentAE",
  keepFeatAE: "mc3e.PolymorphKeepFeatureAE",
  keepSpellAE: "mc3e.PolymorphKeepSpellAE",
  keepClassAE: "mc3e.PolymorphKeepClassAE",
  keepBackgroundAE: "mc3e.PolymorphKeepBackgroundAE"
};
preLocalize("polymorphEffectSettings", { sort: true });

/**
 * Settings to configure how actors are merged when preset polymorphing is applied.
 * @enum {object}
 */
mc3e.transformationPresets = {
  wildshape: {
    icon: '<i class="fas fa-paw"></i>',
    label: "mc3e.PolymorphWildShape",
    options: {
      keepBio: true,
      keepClass: true,
      keepMental: true,
      mergeSaves: true,
      mergeSkills: true,
      keepEquipmentAE: false
    }
  },
  polymorph: {
    icon: '<i class="fas fa-pastafarianism"></i>',
    label: "mc3e.Polymorph",
    options: {
      keepEquipmentAE: false,
      keepClassAE: false,
      keepFeatAE: false,
      keepBackgroundAE: false
    }
  },
  polymorphSelf: {
    icon: '<i class="fas fa-eye"></i>',
    label: "mc3e.PolymorphSelf",
    options: {
      keepSelf: true
    }
  }
};
preLocalize("transformationPresets", { sort: true, keys: ["label"] });

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels.
 * The key for each level represents its proficiency multiplier.
 * @enum {string}
 */
mc3e.proficiencyLevels = {
  0: "mc3e.NotProficient",
  1: "mc3e.Proficient",
  0.5: "mc3e.HalfProficient",
  2: "mc3e.Expertise"
};
preLocalize("proficiencyLevels");

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object. In cases where multiple pieces
 * of cover are in play, we take the highest value.
 * @enum {string}
 */
mc3e.cover = {
  0: "mc3e.None",
  .5: "mc3e.CoverHalf",
  .75: "mc3e.CoverThreeQuarters",
  1: "mc3e.CoverTotal"
};
preLocalize("cover");

/* -------------------------------------------- */

/**
 * A selection of actor attributes that can be tracked on token resource bars.
 * @type {string[]}
 */
mc3e.trackableAttributes = [
  "attributes.ac.value", "attributes.init.bonus", "attributes.movement", "attributes.senses", "attributes.spelldc",
  "attributes.spellLevel", "details.cr", "details.spellLevel", "details.xp.value", "skills.*.passive",
  "abilities.*.value"
];

/* -------------------------------------------- */

/**
 * A selection of actor and item attributes that are valid targets for item resource consumption.
 * @type {string[]}
 */
mc3e.consumableResources = [
  "item.quantity", "item.weight", "item.duration.value", "currency", "details.xp.value", "abilities.*.value",
  "attributes.senses", "attributes.movement", "attributes.ac.flat", "item.armor.value", "item.target", "item.range",
  "item.save.dc"
];

/* -------------------------------------------- */

/**
 * Conditions that can effect an actor.
 * @enum {string}
 */
mc3e.conditionTypes = {
  blinded: "mc3e.ConBlinded",
  charmed: "mc3e.ConCharmed",
  deafened: "mc3e.ConDeafened",
  diseased: "mc3e.ConDiseased",
  exhaustion: "mc3e.ConExhaustion",
  frightened: "mc3e.ConFrightened",
  grappled: "mc3e.ConGrappled",
  incapacitated: "mc3e.ConIncapacitated",
  invisible: "mc3e.ConInvisible",
  paralyzed: "mc3e.ConParalyzed",
  petrified: "mc3e.ConPetrified",
  poisoned: "mc3e.ConPoisoned",
  prone: "mc3e.ConProne",
  restrained: "mc3e.ConRestrained",
  stunned: "mc3e.ConStunned",
  unconscious: "mc3e.ConUnconscious"
};
preLocalize("conditionTypes", { sort: true });

/**
 * Languages a character can learn.
 * @enum {string}
 */
mc3e.languages = {
  common: "mc3e.LanguagesCommon",
  aarakocra: "mc3e.LanguagesAarakocra",
  abyssal: "mc3e.LanguagesAbyssal",
  aquan: "mc3e.LanguagesAquan",
  auran: "mc3e.LanguagesAuran",
  celestial: "mc3e.LanguagesCelestial",
  deep: "mc3e.LanguagesDeepSpeech",
  draconic: "mc3e.LanguagesDraconic",
  druidic: "mc3e.LanguagesDruidic",
  dwarvish: "mc3e.LanguagesDwarvish",
  elvish: "mc3e.LanguagesElvish",
  giant: "mc3e.LanguagesGiant",
  gith: "mc3e.LanguagesGith",
  gnomish: "mc3e.LanguagesGnomish",
  goblin: "mc3e.LanguagesGoblin",
  gnoll: "mc3e.LanguagesGnoll",
  halfling: "mc3e.LanguagesHalfling",
  ignan: "mc3e.LanguagesIgnan",
  infernal: "mc3e.LanguagesInfernal",
  orc: "mc3e.LanguagesOrc",
  primordial: "mc3e.LanguagesPrimordial",
  sylvan: "mc3e.LanguagesSylvan",
  terran: "mc3e.LanguagesTerran",
  cant: "mc3e.LanguagesThievesCant",
  undercommon: "mc3e.LanguagesUndercommon"
};
preLocalize("languages", { sort: true });

/**
 * Maximum allowed character level.
 * @type {number}
 */
mc3e.maxLevel = 20;

/**
 * XP required to achieve each character level.
 * @type {number[]}
 */
mc3e.CHARACTER_EXP_LEVELS = [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000
];

/**
 * XP granted for each challenge rating.
 * @type {number[]}
 */
mc3e.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

/**
 * @typedef {object} CharacterFlagConfig
 * @property {string} name
 * @property {string} hint
 * @property {string} section
 * @property {typeof boolean|string|number} type
 * @property {string} placeholder
 * @property {string[]} [abilities]
 * @property {Object<string, string>} [choices]
 * @property {string[]} [skills]
 */

/* -------------------------------------------- */

/**
 * Trait configuration information.
 *
 * @typedef {object} TraitConfiguration
 * @property {string} label               Localization key for the trait name.
 * @property {string} [actorKeyPath]      If the trait doesn't directly map to an entry as `traits.[key]`, where is
 *                                        this trait's data stored on the actor?
 * @property {string} [configKey]         If the list of trait options doesn't match the name of the trait, where can
 *                                        the options be found within `CONFIG.mc3e`?
 * @property {string} [labelKey]          If config is an enum of objects, where can the label be found?
 * @property {object} [subtypes]          Configuration for traits that take some sort of base item.
 * @property {string} [subtypes.keyPath]  Path to subtype value on base items, should match a category key.
 * @property {string[]} [subtypes.ids]    Key for base item ID objects within `CONFIG.mc3e`.
 * @property {object} [children]          Mapping of category key to an object defining its children.
 * @property {boolean} [sortCategories]   Whether top-level categories should be sorted.
 */

/**
 * Configurable traits on actors.
 * @enum {TraitConfiguration}
 */
mc3e.traits = {
  saves: {
    label: "mc3e.ClassSaves",
    configKey: "abilities"
  },
  skills: {
    label: "mc3e.TraitSkillProf",
    labelKey: "label"
  },
  languages: {
    label: "mc3e.Languages"
  },
  di: {
    label: "mc3e.DamImm",
    configKey: "damageTypes"
  },
  dr: {
    label: "mc3e.DamRes",
    configKey: "damageTypes"
  },
  dv: {
    label: "mc3e.DamVuln",
    configKey: "damageTypes"
  },
  ci: {
    label: "mc3e.ConImm",
    configKey: "conditionTypes"
  },
  weapon: {
    label: "mc3e.TraitWeaponProf",
    actorKeyPath: "traits.weaponProf",
    configKey: "weaponProficiencies",
    subtypes: { keyPath: "weaponType", ids: ["weaponIds"] }
  },
  armor: {
    label: "mc3e.TraitArmorProf",
    actorKeyPath: "traits.armorProf",
    configKey: "armorProficiencies",
    subtypes: { keyPath: "armor.type", ids: ["armorIds", "shieldIds"] }
  },
  tool: {
    label: "mc3e.TraitToolProf",
    actorKeyPath: "traits.toolProf",
    configKey: "toolProficiencies",
    subtypes: { keyPath: "toolType", ids: ["toolIds"] },
    children: { vehicle: "vehicleTypes" },
    sortCategories: true
  }
};
preLocalize("traits", { key: "label" });

/* -------------------------------------------- */

/**
 * Special character flags.
 * @enum {CharacterFlagConfig}
 */
mc3e.characterFlags = {
  diamondSoul: {
    name: "mc3e.FlagsDiamondSoul",
    hint: "mc3e.FlagsDiamondSoulHint",
    section: "mc3e.Feats",
    type: Boolean
  },
  elvenAccuracy: {
    name: "mc3e.FlagsElvenAccuracy",
    hint: "mc3e.FlagsElvenAccuracyHint",
    section: "mc3e.RacialTraits",
    abilities: ["dex", "int", "wis", "cha"],
    type: Boolean
  },
  halflingLucky: {
    name: "mc3e.FlagsHalflingLucky",
    hint: "mc3e.FlagsHalflingLuckyHint",
    section: "mc3e.RacialTraits",
    type: Boolean
  },
  initiativeAdv: {
    name: "mc3e.FlagsInitiativeAdv",
    hint: "mc3e.FlagsInitiativeAdvHint",
    section: "mc3e.Feats",
    type: Boolean
  },
  initiativeAlert: {
    name: "mc3e.FlagsAlert",
    hint: "mc3e.FlagsAlertHint",
    section: "mc3e.Feats",
    type: Boolean
  },
  jackOfAllTrades: {
    name: "mc3e.FlagsJOAT",
    hint: "mc3e.FlagsJOATHint",
    section: "mc3e.Feats",
    type: Boolean
  },
  observantFeat: {
    name: "mc3e.FlagsObservant",
    hint: "mc3e.FlagsObservantHint",
    skills: ["prc", "inv"],
    section: "mc3e.Feats",
    type: Boolean
  },
  powerfulBuild: {
    name: "mc3e.FlagsPowerfulBuild",
    hint: "mc3e.FlagsPowerfulBuildHint",
    section: "mc3e.RacialTraits",
    type: Boolean
  },
  reliableTalent: {
    name: "mc3e.FlagsReliableTalent",
    hint: "mc3e.FlagsReliableTalentHint",
    section: "mc3e.Feats",
    type: Boolean
  },
  remarkableAthlete: {
    name: "mc3e.FlagsRemarkableAthlete",
    hint: "mc3e.FlagsRemarkableAthleteHint",
    abilities: ["str", "dex", "con"],
    section: "mc3e.Feats",
    type: Boolean
  },
  weaponCriticalThreshold: {
    name: "mc3e.FlagsWeaponCritThreshold",
    hint: "mc3e.FlagsWeaponCritThresholdHint",
    section: "mc3e.Feats",
    type: Number,
    placeholder: 20
  },
  spellCriticalThreshold: {
    name: "mc3e.FlagsSpellCritThreshold",
    hint: "mc3e.FlagsSpellCritThresholdHint",
    section: "mc3e.Feats",
    type: Number,
    placeholder: 20
  },
  meleeCriticalDamageDice: {
    name: "mc3e.FlagsMeleeCriticalDice",
    hint: "mc3e.FlagsMeleeCriticalDiceHint",
    section: "mc3e.Feats",
    type: Number,
    placeholder: 0
  }
};
preLocalize("characterFlags", { keys: ["name", "hint", "section"] });

/**
 * Flags allowed on actors. Any flags not in the list may be deleted during a migration.
 * @type {string[]}
 */
mc3e.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(mc3e.characterFlags));

/* -------------------------------------------- */

/**
 * Advancement types that can be added to items.
 * @enum {*}
 */
mc3e.advancementTypes = {
  HitPoints: advancement.HitPointsAdvancement,
  ItemGrant: advancement.ItemGrantAdvancement,
  ScaleValue: advancement.ScaleValueAdvancement
};

/* -------------------------------------------- */

/**
 * Patch an existing config enum to allow conversion from string values to object values without
 * breaking existing modules that are expecting strings.
 * @param {string} key          Key within mc3e that has been replaced with an enum of objects.
 * @param {string} fallbackKey  Key within the new config object from which to get the fallback value.
 * @param {object} [options]    Additional options passed through to logCompatibilityWarning.
 */
function patchConfig(key, fallbackKey, options) {
  /** @override */
  function toString() {
    const message = `The value of CONFIG.mc3e.${key} has been changed to an object.`
      +` The former value can be acccessed from .${fallbackKey}.`;
    foundry.utils.logCompatibilityWarning(message, options);
    return this[fallbackKey];
  }

  Object.values(mc3e[key]).forEach(o => o.toString = toString);
}

/* -------------------------------------------- */

export default mc3e;
