/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Auth_FailedInputs */

const zh_mcp_auth_failed = /** @type {(inputs: Mcp_Auth_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP 服务身份验证失败`)
};

const en_mcp_auth_failed = /** @type {(inputs: Mcp_Auth_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to authenticate MCP server`)
};

/**
* | output |
* | --- |
* | "Failed to authenticate MCP server" |
*
* @param {Mcp_Auth_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_auth_failed = /** @type {((inputs?: Mcp_Auth_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Auth_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_auth_failed(inputs)
	return en_mcp_auth_failed(inputs)
});