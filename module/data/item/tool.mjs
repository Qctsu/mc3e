import SystemDataModel from "../abstract.mjs";
import { FormulaField } from "../fields.mjs";
import EquippableItemTemplate from "./templates/equippable-item.mjs";
import ItemDescriptionTemplate from "./templates/item-description.mjs";
import PhysicalItemTemplate from "./templates/physical-item.mjs";

/**
 * Data definition for Tool items.
 * @mixes ItemDescriptionTemplate
 * @mixes PhysicalItemTemplate
 * @mixes EquippableItemTemplate
 *
 * @property {string} toolType    Tool category as defined in `mc3e.toolTypes`.
 * @property {string} baseItem    Base tool as defined in `mc3e.toolIds` for determining proficiency.
 * @property {string} ability     Default ability when this tool is being used.
 * @property {string} chatFlavor  Additional text added to chat when this tool is used.
 * @property {number} proficient  Level of proficiency in this tool as defined in `mc3e.proficiencyLevels`.
 * @property {string} bonus       Bonus formula added to tool rolls.
 */
export default class ToolData extends SystemDataModel.mixin(
  ItemDescriptionTemplate, PhysicalItemTemplate, EquippableItemTemplate
) {
  /** @inheritdoc */
  static defineSchema() {
    return this.mergeSchema(super.defineSchema(), {
      toolType: new foundry.data.fields.StringField({required: true, label: "mc3e.ItemToolType"}),
      baseItem: new foundry.data.fields.StringField({required: true, label: "mc3e.ItemToolBase"}),
      ability: new foundry.data.fields.StringField({
        required: true, initial: "int", blank: false, label: "mc3e.DefaultAbilityCheck"
      }),
      chatFlavor: new foundry.data.fields.StringField({required: true, label: "mc3e.ChatFlavor"}),
      proficient: new foundry.data.fields.NumberField({
        required: true, nullable: false, initial: 0, min: 0, label: "mc3e.ItemToolProficiency"
      }),
      bonus: new FormulaField({required: true, label: "mc3e.ItemToolBonus"})
    });
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  static migrateData(source) {
    super.migrateData(source);
    ToolData.#migrateAbility(source);
  }

  /* -------------------------------------------- */

  /**
   * Migrate the ability field.
   * @param {object} source  The candidate source data from which the model will be constructed.
   */
  static #migrateAbility(source) {
    if ( Array.isArray(source.ability) ) source.ability = source.ability[0];
  }
}
