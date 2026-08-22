/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Date_TypeInputs */

const zh_date_type = /** @type {(inputs: Date_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日期类型`)
};

const en_date_type = /** @type {(inputs: Date_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date type`)
};

/**
* | output |
* | --- |
* | "Date type" |
*
* @param {Date_TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const date_type = /** @type {((inputs?: Date_TypeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Date_TypeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_date_type(inputs)
	return en_date_type(inputs)
});