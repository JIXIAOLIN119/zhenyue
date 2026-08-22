/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Oauth_Grant_TypeInputs */

const zh_mcp_oauth_grant_type = /** @type {(inputs: Mcp_Oauth_Grant_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`授权模式 (Grant Type)`)
};

const en_mcp_oauth_grant_type = /** @type {(inputs: Mcp_Oauth_Grant_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grant Type`)
};

/**
* | output |
* | --- |
* | "Grant Type" |
*
* @param {Mcp_Oauth_Grant_TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_oauth_grant_type = /** @type {((inputs?: Mcp_Oauth_Grant_TypeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Oauth_Grant_TypeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_oauth_grant_type(inputs)
	return en_mcp_oauth_grant_type(inputs)
});