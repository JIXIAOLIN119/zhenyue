/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Pick_A_DateInputs */

const zh_pick_a_date = /** @type {(inputs: Pick_A_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择日期`)
};

const en_pick_a_date = /** @type {(inputs: Pick_A_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick a date`)
};

/**
* | output |
* | --- |
* | "Pick a date" |
*
* @param {Pick_A_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const pick_a_date = /** @type {((inputs?: Pick_A_DateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Pick_A_DateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_pick_a_date(inputs)
	return en_pick_a_date(inputs)
});