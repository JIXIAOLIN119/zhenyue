/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} N_Folders_SingularInputs */

const zh_n_folders_singular = /** @type {(inputs: N_Folders_SingularInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个文件夹`)
};

const en_n_folders_singular = /** @type {(inputs: N_Folders_SingularInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} Folder`)
};

/**
* | output |
* | --- |
* | "{count} Folder" |
*
* @param {N_Folders_SingularInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_folders_singular = /** @type {((inputs: N_Folders_SingularInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<N_Folders_SingularInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_n_folders_singular(inputs)
	return en_n_folders_singular(inputs)
});