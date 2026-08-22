/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} SkillsInputs */

const zh_skills = /** @type {(inputs: SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`技能`)
};

const en_skills = /** @type {(inputs: SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skills`)
};

/**
* | output |
* | --- |
* | "Skills" |
*
* @param {SkillsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const skills = /** @type {((inputs?: SkillsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SkillsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_skills(inputs)
	return en_skills(inputs)
});