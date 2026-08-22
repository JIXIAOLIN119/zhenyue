/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_New_SkillInputs */

const zh_add_new_skill = /** @type {(inputs: Add_New_SkillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加新技能`)
};

const en_add_new_skill = /** @type {(inputs: Add_New_SkillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add New Skill`)
};

/**
* | output |
* | --- |
* | "Add New Skill" |
*
* @param {Add_New_SkillInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_new_skill = /** @type {((inputs?: Add_New_SkillInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_New_SkillInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_new_skill(inputs)
	return en_add_new_skill(inputs)
});