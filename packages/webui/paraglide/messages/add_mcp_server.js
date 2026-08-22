/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_Mcp_ServerInputs */

const zh_add_mcp_server = /** @type {(inputs: Add_Mcp_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加 MCP 服务`)
};

const en_add_mcp_server = /** @type {(inputs: Add_Mcp_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add MCP Server`)
};

/**
* | output |
* | --- |
* | "Add MCP Server" |
*
* @param {Add_Mcp_ServerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_mcp_server = /** @type {((inputs?: Add_Mcp_ServerInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_Mcp_ServerInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_mcp_server(inputs)
	return en_add_mcp_server(inputs)
});