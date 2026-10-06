/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} File_Exceeds_1mb_LimitInputs */

const zh_file_exceeds_1mb_limit = /** @type {(inputs: File_Exceeds_1mb_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件大小不能超过 1MB`)
};

const en_file_exceeds_1mb_limit = /** @type {(inputs: File_Exceeds_1mb_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File size exceeds the 1MB limit`)
};

/**
* | output |
* | --- |
* | "File size exceeds the 1MB limit" |
*
* @param {File_Exceeds_1mb_LimitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const file_exceeds_1mb_limit = /** @type {((inputs?: File_Exceeds_1mb_LimitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<File_Exceeds_1mb_LimitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_file_exceeds_1mb_limit(inputs)
	return en_file_exceeds_1mb_limit(inputs)
});