/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Remove_VersionInputs */

const zh_failed_to_remove_version = /** @type {(inputs: Failed_To_Remove_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除版本失败`)
};

const en_failed_to_remove_version = /** @type {(inputs: Failed_To_Remove_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to remove version`)
};

/**
* | output |
* | --- |
* | "Failed to remove version" |
*
* @param {Failed_To_Remove_VersionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_remove_version = /** @type {((inputs?: Failed_To_Remove_VersionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Remove_VersionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_remove_version(inputs)
	return en_failed_to_remove_version(inputs)
});