/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ uploaded: NonNullable<unknown>, total: NonNullable<unknown> }} Files_ProgressInputs */

const zh_files_progress = /** @type {(inputs: Files_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.uploaded} / ${i?.total} 个文件`)
};

const en_files_progress = /** @type {(inputs: Files_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.uploaded} / ${i?.total} files`)
};

/**
* | output |
* | --- |
* | "{uploaded} / {total} files" |
*
* @param {Files_ProgressInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const files_progress = /** @type {((inputs: Files_ProgressInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Files_ProgressInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_files_progress(inputs)
	return en_files_progress(inputs)
});