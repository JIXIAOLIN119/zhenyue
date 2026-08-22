/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Disconnect_AuthInputs */

const zh_mcp_disconnect_auth = /** @type {(inputs: Mcp_Disconnect_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`断开身份验证`)
};

const en_mcp_disconnect_auth = /** @type {(inputs: Mcp_Disconnect_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disconnect Auth`)
};

/**
* | output |
* | --- |
* | "Disconnect Auth" |
*
* @param {Mcp_Disconnect_AuthInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_disconnect_auth = /** @type {((inputs?: Mcp_Disconnect_AuthInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Disconnect_AuthInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_disconnect_auth(inputs)
	return en_mcp_disconnect_auth(inputs)
});