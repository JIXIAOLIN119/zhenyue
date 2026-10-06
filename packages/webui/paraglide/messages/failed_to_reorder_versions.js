/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Reorder_VersionsInputs */

const zh_failed_to_reorder_versions = /** @type {(inputs: Failed_To_Reorder_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本重新排序失败`)
};

const en_failed_to_reorder_versions = /** @type {(inputs: Failed_To_Reorder_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to reorder versions`)
};

/**
* | output |
* | --- |
* | "Failed to reorder versions" |
*
* @param {Failed_To_Reorder_VersionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_reorder_versions = /** @type {((inputs?: Failed_To_Reorder_VersionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Reorder_VersionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_reorder_versions(inputs)
	return en_failed_to_reorder_versions(inputs)
});