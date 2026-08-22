/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Watermark_TemplatesInputs */

const zh_watermark_templates = /** @type {(inputs: Watermark_TemplatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`水印模板`)
};

const en_watermark_templates = /** @type {(inputs: Watermark_TemplatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Templates`)
};

/**
* | output |
* | --- |
* | "Templates" |
*
* @param {Watermark_TemplatesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark_templates = /** @type {((inputs?: Watermark_TemplatesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Watermark_TemplatesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_watermark_templates(inputs)
	return en_watermark_templates(inputs)
});