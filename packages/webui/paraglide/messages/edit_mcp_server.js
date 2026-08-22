/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Edit_Mcp_ServerInputs */

const zh_edit_mcp_server = /** @type {(inputs: Edit_Mcp_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑 MCP 服务`)
};

const en_edit_mcp_server = /** @type {(inputs: Edit_Mcp_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit MCP Server`)
};

/**
* | output |
* | --- |
* | "Edit MCP Server" |
*
* @param {Edit_Mcp_ServerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const edit_mcp_server = /** @type {((inputs?: Edit_Mcp_ServerInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Edit_Mcp_ServerInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_edit_mcp_server(inputs)
	return en_edit_mcp_server(inputs)
});