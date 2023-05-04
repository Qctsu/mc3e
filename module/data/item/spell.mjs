import SystemDataModel from "../abstract.mjs";
import { FormulaField, MappingField } from "../fields.mjs";
import ActionTemplate from "./templates/action.mjs";
import ActivatedEffectTemplate from "./templates/activated-effect.mjs";
import ItemDescriptionTemplate from "./templates/item-description.mjs";

/**
 * Data definition for Spell items.
 * @mixes ItemDescriptionTemplate
 * @mixes ActivatedEffectTemplate
 * @mixes ActionTemplate
 *
 * @property {number} level                      Base level of the spell.
 * @property {string} school                     Magical school to which this spell belongs.
 * @property {object} components                 General components and tags for this spell.
 * @property {boolean} components.vocal          Does this spell require vocal components?
 * @property {boolean} components.somatic        Does this spell require somatic components?
 * @property {boolean} components.material       Does this spell require material components?
 * @property {boolean} components.ritual         Can this spell be cast as a ritual?
 * @property {boolean} components.concentration  Does this spell require concentration?
 * @property {object} materials                  Details on material components required for this spell.
 * @property {string} materials.value            Description of the material components required for casting.
 * @property {boolean} materials.consumed        Are these material components consumed during casting?
 * @property {number} materials.cost             GP cost for the required components.
 * @property {number} materials.supply           Quantity of this component available.
 * @property {object} preparation                Details on how this spell is prepared.
 * @property {string} preparation.mode           Spell preparation mode as defined in `mc3e.spellPreparationModes`.
 * @property {boolean} preparation.prepared      Is the spell currently prepared?
 * @property {object} scaling                    Details on how casting at higher levels affects this spell.
 * @property {string} scaling.mode               Spell scaling mode as defined in `mc3e.spellScalingModes`.
 * @property {string} scaling.formula            Dice formula used for scaling.
 */
export default class SpellData extends SystemDataModel.mixin(
  ItemDescriptionTemplate, ActivatedEffectTemplate, ActionTemplate
) {
  /** @inheritdoc */
  static defineSchema() {
    return this.mergeSchema(super.defineSchema(), {
      level: new foundry.data.fields.NumberField({
        required: true, integer: true, initial: 1, min: 0, label: "mc3e.SpellLevel"
      }),
      school: new foundry.data.fields.StringField({required: true, label: "mc3e.SpellSchool"}),
      components: new MappingField(new foundry.data.fields.BooleanField(), {
        required: true, label: "mc3e.SpellComponents",
        initialKeys: [...Object.keys(CONFIG.mc3e.spellComponents), ...Object.keys(CONFIG.mc3e.spellTags)]
      }),
      materials: new foundry.data.fields.SchemaField({
        value: new foundry.data.fields.StringField({required: true, label: "mc3e.SpellMaterialsDescription"}),
        consumed: new foundry.data.fields.BooleanField({required: true, label: "mc3e.SpellMaterialsConsumed"}),
        cost: new foundry.data.fields.NumberField({
          required: true, initial: 0, min: 0, label: "mc3e.SpellMaterialsCost"
        }),
        supply: new foundry.data.fields.NumberField({
          required: true, initial: 0, min: 0, label: "mc3e.SpellMaterialsSupply"
        })
      }, {label: "mc3e.SpellMaterials"}),
      preparation: new foundry.data.fields.SchemaField({
        mode: new foundry.data.fields.StringField({
          required: true, initial: "prepared", label: "mc3e.SpellPreparationMode"
        }),
        prepared: new foundry.data.fields.BooleanField({required: true, label: "mc3e.SpellPrepared"})
      }, {label: "mc3e.SpellPreparation"}),
      scaling: new foundry.data.fields.SchemaField({
        mode: new foundry.data.fields.StringField({required: true, initial: "none", label: "mc3e.ScalingMode"}),
        formula: new FormulaField({required: true, nullable: true, initial: null, label: "mc3e.ScalingFormula"})
      }, {label: "mc3e.LevelScaling"})
    });
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  static migrateData(source) {
    super.migrateData(source);
    SpellData.#migrateComponentData(source);
    SpellData.#migrateScaling(source);
  }

  /* -------------------------------------------- */

  /**
   * Migrate the spell's component object to remove any old, non-boolean values.
   * @param {object} source  The candidate source data from which the model will be constructed.
   */
  static #migrateComponentData(source) {
    if ( !source.components ) return;
    for ( const [key, value] of Object.entries(source.components) ) {
      if ( typeof value !== "boolean" ) delete source.components[key];
    }
  }

  /* -------------------------------------------- */

  /**
   * Migrate spell scaling.
   * @param {object} source  The candidate source data from which the model will be constructed.
   */
  static #migrateScaling(source) {
    if ( !("scaling" in source) ) return;
    if ( (source.scaling.mode === "") || (source.scaling.mode === null) ) source.scaling.mode = "none";
  }
}
