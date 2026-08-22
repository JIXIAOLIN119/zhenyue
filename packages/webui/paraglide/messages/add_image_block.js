/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_Image_BlockInputs */

const zh_add_image_block = /** @type {(inputs: Add_Image_BlockInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加图片块`)
};

const en_add_image_block = /** @type {(inputs: Add_Image_BlockInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Image Block`)
};

/**
* | output |
* | --- |
* | "Add Image Block" |
*
* @param {Add_Image_BlockInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_image_block = /** @type {((inputs?: Add_Image_BlockInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_Image_BlockInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_image_block(inputs)
	return en_add_image_block(inputs)
});