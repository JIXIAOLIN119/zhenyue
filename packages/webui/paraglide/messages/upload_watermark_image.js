/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Watermark_ImageInputs */

const zh_upload_watermark_image = /** @type {(inputs: Upload_Watermark_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传水印图片`)
};

const en_upload_watermark_image = /** @type {(inputs: Upload_Watermark_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload Watermark Image`)
};

/**
* | output |
* | --- |
* | "Upload Watermark Image" |
*
* @param {Upload_Watermark_ImageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload_watermark_image = /** @type {((inputs?: Upload_Watermark_ImageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Watermark_ImageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_upload_watermark_image(inputs)
	return en_upload_watermark_image(inputs)
});