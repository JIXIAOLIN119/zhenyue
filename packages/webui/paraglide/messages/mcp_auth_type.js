/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Auth_TypeInputs */

const zh_mcp_auth_type = /** @type {(inputs: Mcp_Auth_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`身份验证类型`)
};

const en_mcp_auth_type = /** @type {(inputs: Mcp_Auth_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authentication Type`)
};

/**
* | output |
* | --- |
* | "Authentication Type" |
*
* @param {Mcp_Auth_TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_auth_type = /** @type {((inputs?: Mcp_Auth_TypeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Auth_TypeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_auth_type(inputs)
	return en_mcp_auth_type(inputs)
});