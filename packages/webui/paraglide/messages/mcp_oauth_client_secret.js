/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Oauth_Client_SecretInputs */

const zh_mcp_oauth_client_secret = /** @type {(inputs: Mcp_Oauth_Client_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client Secret`)
};

const en_mcp_oauth_client_secret = /** @type {(inputs: Mcp_Oauth_Client_SecretInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client Secret`)
};

/**
* | output |
* | --- |
* | "Client Secret" |
*
* @param {Mcp_Oauth_Client_SecretInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_oauth_client_secret = /** @type {((inputs?: Mcp_Oauth_Client_SecretInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Oauth_Client_SecretInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_oauth_client_secret(inputs)
	return en_mcp_oauth_client_secret(inputs)
});