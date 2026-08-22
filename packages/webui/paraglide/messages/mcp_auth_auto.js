/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Auth_AutoInputs */

const zh_mcp_auth_auto = /** @type {(inputs: Mcp_Auth_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动检测 (默认)`)
};

const en_mcp_auth_auto = /** @type {(inputs: Mcp_Auth_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto-Detect (Default)`)
};

/**
* | output |
* | --- |
* | "Auto-Detect (Default)" |
*
* @param {Mcp_Auth_AutoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_auth_auto = /** @type {((inputs?: Mcp_Auth_AutoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Auth_AutoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_auth_auto(inputs)
	return en_mcp_auth_auto(inputs)
});