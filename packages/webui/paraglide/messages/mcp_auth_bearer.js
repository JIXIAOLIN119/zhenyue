/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Auth_BearerInputs */

const zh_mcp_auth_bearer = /** @type {(inputs: Mcp_Auth_BearerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer 令牌`)
};

const en_mcp_auth_bearer = /** @type {(inputs: Mcp_Auth_BearerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer Token`)
};

/**
* | output |
* | --- |
* | "Bearer Token" |
*
* @param {Mcp_Auth_BearerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_auth_bearer = /** @type {((inputs?: Mcp_Auth_BearerInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Auth_BearerInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_auth_bearer(inputs)
	return en_mcp_auth_bearer(inputs)
});