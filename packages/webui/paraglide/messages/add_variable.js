/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_VariableInputs */

const zh_add_variable = /** @type {(inputs: Add_VariableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加变量`)
};

const en_add_variable = /** @type {(inputs: Add_VariableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Variable`)
};

/**
* | output |
* | --- |
* | "Add Variable" |
*
* @param {Add_VariableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_variable = /** @type {((inputs?: Add_VariableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_VariableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_variable(inputs)
	return en_add_variable(inputs)
});