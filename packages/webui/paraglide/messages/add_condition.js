/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_ConditionInputs */

const zh_add_condition = /** @type {(inputs: Add_ConditionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ 添加条件`)
};

const en_add_condition = /** @type {(inputs: Add_ConditionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Add condition`)
};

/**
* | output |
* | --- |
* | "+ Add condition" |
*
* @param {Add_ConditionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_condition = /** @type {((inputs?: Add_ConditionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_ConditionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_condition(inputs)
	return en_add_condition(inputs)
});