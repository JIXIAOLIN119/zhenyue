/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Configure_SkillInputs */

const zh_configure_skill = /** @type {(inputs: Configure_SkillInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`配置技能：${i?.name}`)
};

const en_configure_skill = /** @type {(inputs: Configure_SkillInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Configure Skill: ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Configure Skill: {name}" |
*
* @param {Configure_SkillInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const configure_skill = /** @type {((inputs: Configure_SkillInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Configure_SkillInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_configure_skill(inputs)
	return en_configure_skill(inputs)
});