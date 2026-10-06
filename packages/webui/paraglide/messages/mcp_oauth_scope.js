/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Oauth_ScopeInputs */

const zh_mcp_oauth_scope = /** @type {(inputs: Mcp_Oauth_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作用域 (Scope)`)
};

const en_mcp_oauth_scope = /** @type {(inputs: Mcp_Oauth_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scope`)
};

/**
* | output |
* | --- |
* | "Scope" |
*
* @param {Mcp_Oauth_ScopeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_oauth_scope = /** @type {((inputs?: Mcp_Oauth_ScopeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Oauth_ScopeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_oauth_scope(inputs)
	return en_mcp_oauth_scope(inputs)
});