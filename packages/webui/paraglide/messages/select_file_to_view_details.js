/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_File_To_View_DetailsInputs */

const zh_select_file_to_view_details = /** @type {(inputs: Select_File_To_View_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择一个文件以查看其详情和评论。`)
};

const en_select_file_to_view_details = /** @type {(inputs: Select_File_To_View_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a file to view its details and comments.`)
};

/**
* | output |
* | --- |
* | "Select a file to view its details and comments." |
*
* @param {Select_File_To_View_DetailsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_file_to_view_details = /** @type {((inputs?: Select_File_To_View_DetailsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_File_To_View_DetailsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_file_to_view_details(inputs)
	return en_select_file_to_view_details(inputs)
});