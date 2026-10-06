/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Mcp_Servers_InstalledInputs */

const zh_no_mcp_servers_installed = /** @type {(inputs: No_Mcp_Servers_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂未配置 MCP 服务`)
};

const en_no_mcp_servers_installed = /** @type {(inputs: No_Mcp_Servers_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No MCP servers configured`)
};

/**
* | output |
* | --- |
* | "No MCP servers configured" |
*
* @param {No_Mcp_Servers_InstalledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_mcp_servers_installed = /** @type {((inputs?: No_Mcp_Servers_InstalledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Mcp_Servers_InstalledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_mcp_servers_installed(inputs)
	return en_no_mcp_servers_installed(inputs)
});