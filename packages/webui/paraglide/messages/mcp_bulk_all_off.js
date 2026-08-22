/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Bulk_All_OffInputs */

const zh_mcp_bulk_all_off = /** @type {(inputs: Mcp_Bulk_All_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部关闭`)
};

const en_mcp_bulk_all_off = /** @type {(inputs: Mcp_Bulk_All_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Off`)
};

/**
* | output |
* | --- |
* | "All Off" |
*
* @param {Mcp_Bulk_All_OffInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_bulk_all_off = /** @type {((inputs?: Mcp_Bulk_All_OffInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Bulk_All_OffInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_bulk_all_off(inputs)
	return en_mcp_bulk_all_off(inputs)
});