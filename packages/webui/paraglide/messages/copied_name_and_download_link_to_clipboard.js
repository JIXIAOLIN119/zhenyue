/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Copied_Name_And_Download_Link_To_ClipboardInputs */

const zh_copied_name_and_download_link_to_clipboard = /** @type {(inputs: Copied_Name_And_Download_Link_To_ClipboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制名称和下载链接到剪贴板`)
};

const en_copied_name_and_download_link_to_clipboard = /** @type {(inputs: Copied_Name_And_Download_Link_To_ClipboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied name and download link to clipboard`)
};

/**
* | output |
* | --- |
* | "Copied name and download link to clipboard" |
*
* @param {Copied_Name_And_Download_Link_To_ClipboardInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const copied_name_and_download_link_to_clipboard = /** @type {((inputs?: Copied_Name_And_Download_Link_To_ClipboardInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Copied_Name_And_Download_Link_To_ClipboardInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_copied_name_and_download_link_to_clipboard(inputs)
	return en_copied_name_and_download_link_to_clipboard(inputs)
});