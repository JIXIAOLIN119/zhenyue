/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Skills_Count_ValueInputs */

const zh_skills_count_value = /** @type {(inputs: Skills_Count_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个技能`)
};

const en_skills_count_value = /** @type {(inputs: Skills_Count_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} Skills`)
};

/**
* | output |
* | --- |
* | "{count} Skills" |
*
* @param {Skills_Count_ValueInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const skills_count_value = /** @type {((inputs: Skills_Count_ValueInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Skills_Count_ValueInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_skills_count_value(inputs)
	return en_skills_count_value(inputs)
});