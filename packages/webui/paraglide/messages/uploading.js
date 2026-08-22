/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} UploadingInputs */

const zh_uploading = /** @type {(inputs: UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传中...`)
};

const en_uploading = /** @type {(inputs: UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploading...`)
};

/**
* | output |
* | --- |
* | "Uploading..." |
*
* @param {UploadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const uploading = /** @type {((inputs?: UploadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<UploadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_uploading(inputs)
	return en_uploading(inputs)
});