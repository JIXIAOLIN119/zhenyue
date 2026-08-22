/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Variable_NameInputs */

const zh_variable_name = /** @type {(inputs: Variable_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`变量名称`)
};

const en_variable_name = /** @type {(inputs: Variable_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Variable Name`)
};

/**
* | output |
* | --- |
* | "Variable Name" |
*
* @param {Variable_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const variable_name = /** @type {((inputs?: Variable_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Variable_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_variable_name(inputs)
	return en_variable_name(inputs)
});