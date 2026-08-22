/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_ServersInputs */

const zh_mcp_servers = /** @type {(inputs: Mcp_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP 服务`)
};

const en_mcp_servers = /** @type {(inputs: Mcp_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP Servers`)
};

/**
* | output |
* | --- |
* | "MCP Servers" |
*
* @param {Mcp_ServersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_servers = /** @type {((inputs?: Mcp_ServersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_ServersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_servers(inputs)
	return en_mcp_servers(inputs)
});