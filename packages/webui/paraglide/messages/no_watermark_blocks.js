/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Watermark_BlocksInputs */

const zh_no_watermark_blocks = /** @type {(inputs: No_Watermark_BlocksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尚未添加水印块`)
};

const en_no_watermark_blocks = /** @type {(inputs: No_Watermark_BlocksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No watermark blocks added yet`)
};

/**
* | output |
* | --- |
* | "No watermark blocks added yet" |
*
* @param {No_Watermark_BlocksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_watermark_blocks = /** @type {((inputs?: No_Watermark_BlocksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Watermark_BlocksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_watermark_blocks(inputs)
	return en_no_watermark_blocks(inputs)
});