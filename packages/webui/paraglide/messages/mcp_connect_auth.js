/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Connect_AuthInputs */

const zh_mcp_connect_auth = /** @type {(inputs: Mcp_Connect_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`连接账号`)
};

const en_mcp_connect_auth = /** @type {(inputs: Mcp_Connect_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect Account`)
};

/**
* | output |
* | --- |
* | "Connect Account" |
*
* @param {Mcp_Connect_AuthInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_connect_auth = /** @type {((inputs?: Mcp_Connect_AuthInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Connect_AuthInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_connect_auth(inputs)
	return en_mcp_connect_auth(inputs)
});