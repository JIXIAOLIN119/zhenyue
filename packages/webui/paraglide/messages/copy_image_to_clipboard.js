/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Copy_Image_To_ClipboardInputs */

const zh_copy_image_to_clipboard = /** @type {(inputs: Copy_Image_To_ClipboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制优化图片到剪贴板`)
};

const en_copy_image_to_clipboard = /** @type {(inputs: Copy_Image_To_ClipboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy optimized image to clipboard`)
};

/**
* | output |
* | --- |
* | "Copy optimized image to clipboard" |
*
* @param {Copy_Image_To_ClipboardInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const copy_image_to_clipboard = /** @type {((inputs?: Copy_Image_To_ClipboardInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Copy_Image_To_ClipboardInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_copy_image_to_clipboard(inputs)
	return en_copy_image_to_clipboard(inputs)
});