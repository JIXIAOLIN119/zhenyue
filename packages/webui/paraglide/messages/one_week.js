/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} One_WeekInputs */

const zh_one_week = /** @type {(inputs: One_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 周`)
};

const en_one_week = /** @type {(inputs: One_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 Week`)
};

/**
* | output |
* | --- |
* | "1 Week" |
*
* @param {One_WeekInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const one_week = /** @type {((inputs?: One_WeekInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<One_WeekInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_one_week(inputs)
	return en_one_week(inputs)
});