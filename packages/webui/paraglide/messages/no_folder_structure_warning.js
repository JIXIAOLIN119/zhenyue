/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Folder_Structure_WarningInputs */

const zh_no_folder_structure_warning = /** @type {(inputs: No_Folder_Structure_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件夹层级将被扁平化。所有嵌套文件将直接下载到您的默认下载文件夹中。`)
};

const en_no_folder_structure_warning = /** @type {(inputs: No_Folder_Structure_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folder hierarchy will be flattened. All nested files will be downloaded directly into your default download folder.`)
};

/**
* | output |
* | --- |
* | "Folder hierarchy will be flattened. All nested files will be downloaded directly into your default download folder." |
*
* @param {No_Folder_Structure_WarningInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_folder_structure_warning = /** @type {((inputs?: No_Folder_Structure_WarningInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Folder_Structure_WarningInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_folder_structure_warning(inputs)
	return en_no_folder_structure_warning(inputs)
});