/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_ParametersInputs */

const zh_tool_parameters = /** @type {(inputs: Tool_ParametersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参数列表`)
};

const en_tool_parameters = /** @type {(inputs: Tool_ParametersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parameters`)
};

/**
* | output |
* | --- |
* | "Parameters" |
*
* @param {Tool_ParametersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tool_parameters = /** @type {((inputs?: Tool_ParametersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_ParametersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_tool_parameters(inputs)
	return en_tool_parameters(inputs)
});