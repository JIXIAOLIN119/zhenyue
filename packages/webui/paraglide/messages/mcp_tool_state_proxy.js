/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Tool_State_ProxyInputs */

const zh_mcp_tool_state_proxy = /** @type {(inputs: Mcp_Tool_State_ProxyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代理`)
};

const en_mcp_tool_state_proxy = /** @type {(inputs: Mcp_Tool_State_ProxyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proxy`)
};

/**
* | output |
* | --- |
* | "Proxy" |
*
* @param {Mcp_Tool_State_ProxyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_tool_state_proxy = /** @type {((inputs?: Mcp_Tool_State_ProxyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Tool_State_ProxyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_tool_state_proxy(inputs)
	return en_mcp_tool_state_proxy(inputs)
});