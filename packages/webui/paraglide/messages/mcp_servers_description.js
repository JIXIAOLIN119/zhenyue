/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Servers_DescriptionInputs */

const zh_mcp_servers_description = /** @type {(inputs: Mcp_Servers_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为团队配置 Model Context Protocol (MCP) 服务与工具。`)
};

const en_mcp_servers_description = /** @type {(inputs: Mcp_Servers_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure Model Context Protocol (MCP) servers and tools for your team.`)
};

/**
* | output |
* | --- |
* | "Configure Model Context Protocol (MCP) servers and tools for your team." |
*
* @param {Mcp_Servers_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_servers_description = /** @type {((inputs?: Mcp_Servers_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Servers_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_servers_description(inputs)
	return en_mcp_servers_description(inputs)
});