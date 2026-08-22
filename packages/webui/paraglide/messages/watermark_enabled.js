/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Watermark_EnabledInputs */

const zh_watermark_enabled = /** @type {(inputs: Watermark_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`启用水印`)
};

const en_watermark_enabled = /** @type {(inputs: Watermark_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable Watermark`)
};

/**
* | output |
* | --- |
* | "Enable Watermark" |
*
* @param {Watermark_EnabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark_enabled = /** @type {((inputs?: Watermark_EnabledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Watermark_EnabledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_watermark_enabled(inputs)
	return en_watermark_enabled(inputs)
});