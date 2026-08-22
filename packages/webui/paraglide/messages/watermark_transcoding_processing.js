/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Watermark_Transcoding_ProcessingInputs */

const zh_watermark_transcoding_processing = /** @type {(inputs: Watermark_Transcoding_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`水印媒体转码处理中...`)
};

const en_watermark_transcoding_processing = /** @type {(inputs: Watermark_Transcoding_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcoding watermark media...`)
};

/**
* | output |
* | --- |
* | "Transcoding watermark media..." |
*
* @param {Watermark_Transcoding_ProcessingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark_transcoding_processing = /** @type {((inputs?: Watermark_Transcoding_ProcessingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Watermark_Transcoding_ProcessingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_watermark_transcoding_processing(inputs)
	return en_watermark_transcoding_processing(inputs)
});