/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Bulk_All_DirectInputs */

const zh_mcp_bulk_all_direct = /** @type {(inputs: Mcp_Bulk_All_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部直连`)
};

const en_mcp_bulk_all_direct = /** @type {(inputs: Mcp_Bulk_All_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Direct`)
};

/**
* | output |
* | --- |
* | "All Direct" |
*
* @param {Mcp_Bulk_All_DirectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_bulk_all_direct = /** @type {((inputs?: Mcp_Bulk_All_DirectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Bulk_All_DirectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_bulk_all_direct(inputs)
	return en_mcp_bulk_all_direct(inputs)
});