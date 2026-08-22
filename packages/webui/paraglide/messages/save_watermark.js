/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Save_WatermarkInputs */

const zh_save_watermark = /** @type {(inputs: Save_WatermarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存水印`)
};

const en_save_watermark = /** @type {(inputs: Save_WatermarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save Watermark`)
};

/**
* | output |
* | --- |
* | "Save Watermark" |
*
* @param {Save_WatermarkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const save_watermark = /** @type {((inputs?: Save_WatermarkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Save_WatermarkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_save_watermark(inputs)
	return en_save_watermark(inputs)
});