/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Untitled_UploadInputs */

const zh_untitled_upload = /** @type {(inputs: Untitled_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未命名上传`)
};

const en_untitled_upload = /** @type {(inputs: Untitled_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Untitled Upload`)
};

/**
* | output |
* | --- |
* | "Untitled Upload" |
*
* @param {Untitled_UploadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const untitled_upload = /** @type {((inputs?: Untitled_UploadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Untitled_UploadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_untitled_upload(inputs)
	return en_untitled_upload(inputs)
});