/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} N_Files_SelectedInputs */

const zh_n_files_selected = /** @type {(inputs: N_Files_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已选择 ${i?.count} 个文件`)
};

const en_n_files_selected = /** @type {(inputs: N_Files_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} file(s) selected`)
};

/**
* | output |
* | --- |
* | "{count} file(s) selected" |
*
* @param {N_Files_SelectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_files_selected = /** @type {((inputs: N_Files_SelectedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<N_Files_SelectedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_n_files_selected(inputs)
	return en_n_files_selected(inputs)
});