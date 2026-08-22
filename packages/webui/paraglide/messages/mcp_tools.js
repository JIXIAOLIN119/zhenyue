/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_ToolsInputs */

const zh_mcp_tools = /** @type {(inputs: Mcp_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP 工具`)
};

const en_mcp_tools = /** @type {(inputs: Mcp_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP Tools`)
};

/**
* | output |
* | --- |
* | "MCP Tools" |
*
* @param {Mcp_ToolsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_tools = /** @type {((inputs?: Mcp_ToolsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_ToolsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_tools(inputs)
	return en_mcp_tools(inputs)
});