/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Image_Asset_KeyInputs */

const zh_image_asset_key = /** @type {(inputs: Image_Asset_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片资源`)
};

const en_image_asset_key = /** @type {(inputs: Image_Asset_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image Asset`)
};

/**
* | output |
* | --- |
* | "Image Asset" |
*
* @param {Image_Asset_KeyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const image_asset_key = /** @type {((inputs?: Image_Asset_KeyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Image_Asset_KeyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_image_asset_key(inputs)
	return en_image_asset_key(inputs)
});