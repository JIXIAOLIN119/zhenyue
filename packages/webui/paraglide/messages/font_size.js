/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Font_SizeInputs */

const zh_font_size = /** @type {(inputs: Font_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`字体大小`)
};

const en_font_size = /** @type {(inputs: Font_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Font Size`)
};

/**
* | output |
* | --- |
* | "Font Size" |
*
* @param {Font_SizeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const font_size = /** @type {((inputs?: Font_SizeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Font_SizeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_font_size(inputs)
	return en_font_size(inputs)
});