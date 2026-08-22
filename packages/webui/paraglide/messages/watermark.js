/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} WatermarkInputs */

const zh_watermark = /** @type {(inputs: WatermarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`水印`)
};

const en_watermark = /** @type {(inputs: WatermarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Watermark`)
};

/**
* | output |
* | --- |
* | "Watermark" |
*
* @param {WatermarkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark = /** @type {((inputs?: WatermarkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<WatermarkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_watermark(inputs)
	return en_watermark(inputs)
});