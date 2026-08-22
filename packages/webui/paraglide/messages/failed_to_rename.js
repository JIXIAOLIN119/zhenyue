/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_RenameInputs */

const zh_failed_to_rename = /** @type {(inputs: Failed_To_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重命名失败`)
};

const en_failed_to_rename = /** @type {(inputs: Failed_To_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to rename`)
};

/**
* | output |
* | --- |
* | "Failed to rename" |
*
* @param {Failed_To_RenameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_rename = /** @type {((inputs?: Failed_To_RenameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_RenameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_rename(inputs)
	return en_failed_to_rename(inputs)
});