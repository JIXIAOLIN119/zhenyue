/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} UploadInputs */

const zh_upload = /** @type {(inputs: UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传`)
};

const en_upload = /** @type {(inputs: UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload`)
};

/**
* | output |
* | --- |
* | "Upload" |
*
* @param {UploadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload = /** @type {((inputs?: UploadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<UploadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_upload(inputs)
	return en_upload(inputs)
});