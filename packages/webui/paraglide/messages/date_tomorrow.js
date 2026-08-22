/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Date_TomorrowInputs */

const zh_date_tomorrow = /** @type {(inputs: Date_TomorrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`明天`)
};

const en_date_tomorrow = /** @type {(inputs: Date_TomorrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tomorrow`)
};

/**
* | output |
* | --- |
* | "Tomorrow" |
*
* @param {Date_TomorrowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const date_tomorrow = /** @type {((inputs?: Date_TomorrowInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Date_TomorrowInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_date_tomorrow(inputs)
	return en_date_tomorrow(inputs)
});