/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Refresh_ServerInputs */

const zh_mcp_refresh_server = /** @type {(inputs: Mcp_Refresh_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`刷新服务器`)
};

const en_mcp_refresh_server = /** @type {(inputs: Mcp_Refresh_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refresh Server`)
};

/**
* | output |
* | --- |
* | "Refresh Server" |
*
* @param {Mcp_Refresh_ServerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_refresh_server = /** @type {((inputs?: Mcp_Refresh_ServerInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Refresh_ServerInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_refresh_server(inputs)
	return en_mcp_refresh_server(inputs)
});