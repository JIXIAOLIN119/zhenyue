/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Prepare_Download_LinksInputs */

const zh_failed_to_prepare_download_links = /** @type {(inputs: Failed_To_Prepare_Download_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`准备下载链接失败`)
};

const en_failed_to_prepare_download_links = /** @type {(inputs: Failed_To_Prepare_Download_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to prepare download links`)
};

/**
* | output |
* | --- |
* | "Failed to prepare download links" |
*
* @param {Failed_To_Prepare_Download_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_prepare_download_links = /** @type {((inputs?: Failed_To_Prepare_Download_LinksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Prepare_Download_LinksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_prepare_download_links(inputs)
	return en_failed_to_prepare_download_links(inputs)
});