/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Auth_SuccessInputs */

const zh_mcp_auth_success = /** @type {(inputs: Mcp_Auth_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP 服务身份验证成功`)
};

const en_mcp_auth_success = /** @type {(inputs: Mcp_Auth_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP server authenticated successfully`)
};

/**
* | output |
* | --- |
* | "MCP server authenticated successfully" |
*
* @param {Mcp_Auth_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_auth_success = /** @type {((inputs?: Mcp_Auth_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Auth_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_auth_success(inputs)
	return en_mcp_auth_success(inputs)
});