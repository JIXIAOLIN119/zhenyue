/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Date_One_Month_AgoInputs */

const zh_date_one_month_ago = /** @type {(inputs: Date_One_Month_AgoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一个月前`)
};

const en_date_one_month_ago = /** @type {(inputs: Date_One_Month_AgoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One month ago`)
};

/**
* | output |
* | --- |
* | "One month ago" |
*
* @param {Date_One_Month_AgoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const date_one_month_ago = /** @type {((inputs?: Date_One_Month_AgoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Date_One_Month_AgoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_date_one_month_ago(inputs)
	return en_date_one_month_ago(inputs)
});