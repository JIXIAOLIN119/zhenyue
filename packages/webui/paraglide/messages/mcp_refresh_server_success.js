/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Refresh_Server_SuccessInputs */

const zh_mcp_refresh_server_success = /** @type {(inputs: Mcp_Refresh_Server_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务器已刷新`)
};

const en_mcp_refresh_server_success = /** @type {(inputs: Mcp_Refresh_Server_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server refreshed`)
};

/**
* | output |
* | --- |
* | "Server refreshed" |
*
* @param {Mcp_Refresh_Server_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_refresh_server_success = /** @type {((inputs?: Mcp_Refresh_Server_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Refresh_Server_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_refresh_server_success(inputs)
	return en_mcp_refresh_server_success(inputs)
});