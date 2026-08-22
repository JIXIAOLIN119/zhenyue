/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Tools_FoundInputs */

const zh_no_tools_found = /** @type {(inputs: No_Tools_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到符合搜索条件的工具。`)
};

const en_no_tools_found = /** @type {(inputs: No_Tools_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No tools found matching your search.`)
};

/**
* | output |
* | --- |
* | "No tools found matching your search." |
*
* @param {No_Tools_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_tools_found = /** @type {((inputs?: No_Tools_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Tools_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_tools_found(inputs)
	return en_no_tools_found(inputs)
});