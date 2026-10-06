/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Twenty_Four_HoursInputs */

const zh_twenty_four_hours = /** @type {(inputs: Twenty_Four_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`24 小时`)
};

const en_twenty_four_hours = /** @type {(inputs: Twenty_Four_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`24 Hours`)
};

/**
* | output |
* | --- |
* | "24 Hours" |
*
* @param {Twenty_Four_HoursInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const twenty_four_hours = /** @type {((inputs?: Twenty_Four_HoursInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Twenty_Four_HoursInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_twenty_four_hours(inputs)
	return en_twenty_four_hours(inputs)
});