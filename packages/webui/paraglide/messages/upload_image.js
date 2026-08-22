/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_ImageInputs */

const zh_upload_image = /** @type {(inputs: Upload_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传图片`)
};

const en_upload_image = /** @type {(inputs: Upload_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload Image`)
};

/**
* | output |
* | --- |
* | "Upload Image" |
*
* @param {Upload_ImageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload_image = /** @type {((inputs?: Upload_ImageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_ImageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_upload_image(inputs)
	return en_upload_image(inputs)
});