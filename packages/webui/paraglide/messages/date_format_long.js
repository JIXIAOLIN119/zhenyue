/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Date_Format_LongInputs */

const zh_date_format_long = /** @type {(inputs: Date_Format_LongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`yyyy年M月d日`)
};

const en_date_format_long = /** @type {(inputs: Date_Format_LongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MMMM d, yyyy`)
};

/**
* | output |
* | --- |
* | "MMMM d, yyyy" |
*
* @param {Date_Format_LongInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const date_format_long = /** @type {((inputs?: Date_Format_LongInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Date_Format_LongInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_date_format_long(inputs)
	return en_date_format_long(inputs)
});