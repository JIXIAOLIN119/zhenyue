/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Auth_NoneInputs */

const zh_mcp_auth_none = /** @type {(inputs: Mcp_Auth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无`)
};

const en_mcp_auth_none = /** @type {(inputs: Mcp_Auth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`None`)
};

/**
* | output |
* | --- |
* | "None" |
*
* @param {Mcp_Auth_NoneInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_auth_none = /** @type {((inputs?: Mcp_Auth_NoneInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Auth_NoneInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_auth_none(inputs)
	return en_mcp_auth_none(inputs)
});