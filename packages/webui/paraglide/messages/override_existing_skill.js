/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Override_Existing_SkillInputs */

const zh_override_existing_skill = /** @type {(inputs: Override_Existing_SkillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你想覆盖现有技能吗？`)
};

const en_override_existing_skill = /** @type {(inputs: Override_Existing_SkillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do you want to override the existing skill?`)
};

/**
* | output |
* | --- |
* | "Do you want to override the existing skill?" |
*
* @param {Override_Existing_SkillInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const override_existing_skill = /** @type {((inputs?: Override_Existing_SkillInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Override_Existing_SkillInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_override_existing_skill(inputs)
	return en_override_existing_skill(inputs)
});