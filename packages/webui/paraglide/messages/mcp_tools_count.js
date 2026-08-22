/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mcp_Tools_CountInputs */

const zh_mcp_tools_count = /** @type {(inputs: Mcp_Tools_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个工具`)
};

const en_mcp_tools_count = /** @type {(inputs: Mcp_Tools_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} Tools`)
};

/**
* | output |
* | --- |
* | "{count} Tools" |
*
* @param {Mcp_Tools_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_tools_count = /** @type {((inputs: Mcp_Tools_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Tools_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_tools_count(inputs)
	return en_mcp_tools_count(inputs)
});