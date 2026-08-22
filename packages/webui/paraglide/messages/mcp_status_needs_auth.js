/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Status_Needs_AuthInputs */

const zh_mcp_status_needs_auth = /** @type {(inputs: Mcp_Status_Needs_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要身份验证`)
};

const en_mcp_status_needs_auth = /** @type {(inputs: Mcp_Status_Needs_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Needs Authentication`)
};

/**
* | output |
* | --- |
* | "Needs Authentication" |
*
* @param {Mcp_Status_Needs_AuthInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_status_needs_auth = /** @type {((inputs?: Mcp_Status_Needs_AuthInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Status_Needs_AuthInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_status_needs_auth(inputs)
	return en_mcp_status_needs_auth(inputs)
});