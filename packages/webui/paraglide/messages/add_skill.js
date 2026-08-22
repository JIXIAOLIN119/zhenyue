/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_SkillInputs */

const zh_add_skill = /** @type {(inputs: Add_SkillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加技能`)
};

const en_add_skill = /** @type {(inputs: Add_SkillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Skill`)
};

/**
* | output |
* | --- |
* | "Add Skill" |
*
* @param {Add_SkillInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_skill = /** @type {((inputs?: Add_SkillInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_SkillInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_skill(inputs)
	return en_add_skill(inputs)
});