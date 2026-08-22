/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} TodayInputs */

const zh_today = /** @type {(inputs: TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今天`)
};

const en_today = /** @type {(inputs: TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Today`)
};

/**
* | output |
* | --- |
* | "Today" |
*
* @param {TodayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const today = /** @type {((inputs?: TodayInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<TodayInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_today(inputs)
	return en_today(inputs)
});