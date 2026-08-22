/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Date_TodayInputs */

const zh_date_today = /** @type {(inputs: Date_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今天`)
};

const en_date_today = /** @type {(inputs: Date_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Today`)
};

/**
* | output |
* | --- |
* | "Today" |
*
* @param {Date_TodayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const date_today = /** @type {((inputs?: Date_TodayInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Date_TodayInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_date_today(inputs)
	return en_date_today(inputs)
});