import BaseConfigSheet from "./base-config.mjs";

/**
 * A simple form to set actor movement speeds.
 */
export default class ActorMovementConfig extends BaseConfigSheet {

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["mc3e"],
      template: "systems/mc3e/templates/apps/movement-config.hbs",
      width: 300,
      height: "auto"
    });
  }

  /* -------------------------------------------- */

  /** @override */
  get title() {
    return `${game.i18n.localize("mc3e.MovementConfig")}: ${this.document.name}`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData(options={}) {
    const source = this.document.toObject();

    // Current movement values
    const movement = source.system.attributes?.movement || {};
    for ( let [k, v] of Object.entries(movement) ) {
      if ( ["units", "hover"].includes(k) ) continue;
      movement[k] = Number.isNumeric(v) ? v.toNearest(0.1) : 0;
    }

    // Allowed speeds
    const speeds = source.type === "group" ? {
      land: "mc3e.MovementLand",
      water: "mc3e.MovementWater",
      air: "mc3e.MovementAir"
    } : {
      walk: "mc3e.MovementWalk",
      burrow: "mc3e.MovementBurrow",
      climb: "mc3e.MovementClimb",
      fly: "mc3e.MovementFly",
      swim: "mc3e.MovementSwim"
    };

    // Return rendering context
    return {
      speeds,
      movement,
      selectUnits: source.type !== "group",
      canHover: source.type !== "group",
      units: CONFIG.mc3e.movementUnits
    };
  }
}
