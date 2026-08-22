/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Image_SizeInputs */

const zh_image_size = /** @type {(inputs: Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片大小`)
};

const en_image_size = /** @type {(inputs: Image_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image Size`)
};

/**
* | output |
* | --- |
* | "Image Size" |
*
* @param {Image_SizeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const image_size = /** @type {((inputs?: Image_SizeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Image_SizeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_image_size(inputs)
	return en_image_size(inputs)
});