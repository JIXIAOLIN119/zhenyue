/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Bulk_All_ProxyInputs */

const zh_mcp_bulk_all_proxy = /** @type {(inputs: Mcp_Bulk_All_ProxyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部代理`)
};

const en_mcp_bulk_all_proxy = /** @type {(inputs: Mcp_Bulk_All_ProxyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Proxy`)
};

/**
* | output |
* | --- |
* | "All Proxy" |
*
* @param {Mcp_Bulk_All_ProxyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_bulk_all_proxy = /** @type {((inputs?: Mcp_Bulk_All_ProxyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Bulk_All_ProxyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_bulk_all_proxy(inputs)
	return en_mcp_bulk_all_proxy(inputs)
});