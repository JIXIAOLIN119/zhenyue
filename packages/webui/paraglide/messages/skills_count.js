/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Skills_CountInputs */

const zh_skills_count = /** @type {(inputs: Skills_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`技能`)
};

const en_skills_count = /** @type {(inputs: Skills_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skills`)
};

/**
* | output |
* | --- |
* | "Skills" |
*
* @param {Skills_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const skills_count = /** @type {((inputs?: Skills_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Skills_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_skills_count(inputs)
	return en_skills_count(inputs)
});