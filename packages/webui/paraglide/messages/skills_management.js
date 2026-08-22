/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Skills_ManagementInputs */

const zh_skills_management = /** @type {(inputs: Skills_ManagementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`技能管理`)
};

const en_skills_management = /** @type {(inputs: Skills_ManagementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skills Management`)
};

/**
* | output |
* | --- |
* | "Skills Management" |
*
* @param {Skills_ManagementInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const skills_management = /** @type {((inputs?: Skills_ManagementInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Skills_ManagementInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_skills_management(inputs)
	return en_skills_management(inputs)
});