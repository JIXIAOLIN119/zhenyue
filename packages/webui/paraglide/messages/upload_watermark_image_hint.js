/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Watermark_Image_HintInputs */

const zh_upload_watermark_image_hint = /** @type {(inputs: Upload_Watermark_Image_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖放或浏览文件。最大 1MB。`)
};

const en_upload_watermark_image_hint = /** @type {(inputs: Upload_Watermark_Image_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag and drop, or browse. Max 1MB.`)
};

/**
* | output |
* | --- |
* | "Drag and drop, or browse. Max 1MB." |
*
* @param {Upload_Watermark_Image_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload_watermark_image_hint = /** @type {((inputs?: Upload_Watermark_Image_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Watermark_Image_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_upload_watermark_image_hint(inputs)
	return en_upload_watermark_image_hint(inputs)
});