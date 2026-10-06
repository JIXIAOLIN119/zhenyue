/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_CoverInputs */

const zh_upload_cover = /** @type {(inputs: Upload_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传封面`)
};

const en_upload_cover = /** @type {(inputs: Upload_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload cover`)
};

/**
* | output |
* | --- |
* | "Upload cover" |
*
* @param {Upload_CoverInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload_cover = /** @type {((inputs?: Upload_CoverInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_CoverInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_upload_cover(inputs)
	return en_upload_cover(inputs)
});