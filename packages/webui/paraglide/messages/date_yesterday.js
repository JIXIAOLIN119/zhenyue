/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Date_YesterdayInputs */

const zh_date_yesterday = /** @type {(inputs: Date_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`昨天`)
};

const en_date_yesterday = /** @type {(inputs: Date_YesterdayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yesterday`)
};

/**
* | output |
* | --- |
* | "Yesterday" |
*
* @param {Date_YesterdayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const date_yesterday = /** @type {((inputs?: Date_YesterdayInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Date_YesterdayInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_date_yesterday(inputs)
	return en_date_yesterday(inputs)
});