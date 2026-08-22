/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_ResultInputs */

const zh_tool_result = /** @type {(inputs: Tool_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工具结果：`)
};

const en_tool_result = /** @type {(inputs: Tool_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tool Result:`)
};

/**
* | output |
* | --- |
* | "Tool Result:" |
*
* @param {Tool_ResultInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tool_result = /** @type {((inputs?: Tool_ResultInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_ResultInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_tool_result(inputs)
	return en_tool_result(inputs)
});