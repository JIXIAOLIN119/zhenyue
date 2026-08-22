/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Versions_FoundInputs */

const zh_no_versions_found = /** @type {(inputs: No_Versions_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无版本`)
};

const en_no_versions_found = /** @type {(inputs: No_Versions_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No versions found`)
};

/**
* | output |
* | --- |
* | "No versions found" |
*
* @param {No_Versions_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_versions_found = /** @type {((inputs?: No_Versions_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Versions_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_versions_found(inputs)
	return en_no_versions_found(inputs)
});