/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Oauth_Client_IdInputs */

const zh_mcp_oauth_client_id = /** @type {(inputs: Mcp_Oauth_Client_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client ID`)
};

const en_mcp_oauth_client_id = /** @type {(inputs: Mcp_Oauth_Client_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client ID`)
};

/**
* | output |
* | --- |
* | "Client ID" |
*
* @param {Mcp_Oauth_Client_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_oauth_client_id = /** @type {((inputs?: Mcp_Oauth_Client_IdInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Oauth_Client_IdInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_oauth_client_id(inputs)
	return en_mcp_oauth_client_id(inputs)
});