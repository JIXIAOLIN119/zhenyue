/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Calling_ToolInputs */

const zh_calling_tool = /** @type {(inputs: Calling_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`调用工具：`)
};

const en_calling_tool = /** @type {(inputs: Calling_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calling Tool:`)
};

/**
* | output |
* | --- |
* | "Calling Tool:" |
*
* @param {Calling_ToolInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const calling_tool = /** @type {((inputs?: Calling_ToolInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Calling_ToolInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_calling_tool(inputs)
	return en_calling_tool(inputs)
});