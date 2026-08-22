/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Download_Original_ImageInputs */

const zh_download_original_image = /** @type {(inputs: Download_Original_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载原始图片`)
};

const en_download_original_image = /** @type {(inputs: Download_Original_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download original image`)
};

/**
* | output |
* | --- |
* | "Download original image" |
*
* @param {Download_Original_ImageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const download_original_image = /** @type {((inputs?: Download_Original_ImageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Download_Original_ImageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_download_original_image(inputs)
	return en_download_original_image(inputs)
});