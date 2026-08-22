/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Delete_Skill_ConfirmationInputs */

const zh_delete_skill_confirmation = /** @type {(inputs: Delete_Skill_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`此操作无法撤销。这将永久删除技能 "${i?.name}" 及其所有配置。`)
};

const en_delete_skill_confirmation = /** @type {(inputs: Delete_Skill_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This action cannot be undone. This will permanently delete the skill "${i?.name}" and all its configurations.`)
};

/**
* | output |
* | --- |
* | "This action cannot be undone. This will permanently delete the skill \"{name}\" and all its configurations." |
*
* @param {Delete_Skill_ConfirmationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_skill_confirmation = /** @type {((inputs: Delete_Skill_ConfirmationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_Skill_ConfirmationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_skill_confirmation(inputs)
	return en_delete_skill_confirmation(inputs)
});