/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Watermark_UpdatedInputs */

const zh_watermark_updated = /** @type {(inputs: Watermark_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`水印更新成功`)
};

const en_watermark_updated = /** @type {(inputs: Watermark_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Watermark updated successfully`)
};

/**
* | output |
* | --- |
* | "Watermark updated successfully" |
*
* @param {Watermark_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark_updated = /** @type {((inputs?: Watermark_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Watermark_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_watermark_updated(inputs)
	return en_watermark_updated(inputs)
});