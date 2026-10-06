/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Image_ObjectInputs */

const zh_image_object = /** @type {(inputs: Image_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[图片对象]`)
};

const en_image_object = /** @type {(inputs: Image_ObjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[Image Object]`)
};

/**
* | output |
* | --- |
* | "[Image Object]" |
*
* @param {Image_ObjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const image_object = /** @type {((inputs?: Image_ObjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Image_ObjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_image_object(inputs)
	return en_image_object(inputs)
});