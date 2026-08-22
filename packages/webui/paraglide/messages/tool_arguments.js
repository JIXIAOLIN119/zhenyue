/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_ArgumentsInputs */

const zh_tool_arguments = /** @type {(inputs: Tool_ArgumentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参数`)
};

const en_tool_arguments = /** @type {(inputs: Tool_ArgumentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arguments`)
};

/**
* | output |
* | --- |
* | "Arguments" |
*
* @param {Tool_ArgumentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tool_arguments = /** @type {((inputs?: Tool_ArgumentsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_ArgumentsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_tool_arguments(inputs)
	return en_tool_arguments(inputs)
});