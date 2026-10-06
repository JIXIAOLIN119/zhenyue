/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Package_UploadInputs */

const zh_package_upload = /** @type {(inputs: Package_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`包上传`)
};

const en_package_upload = /** @type {(inputs: Package_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Package Upload`)
};

/**
* | output |
* | --- |
* | "Package Upload" |
*
* @param {Package_UploadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const package_upload = /** @type {((inputs?: Package_UploadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Package_UploadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_package_upload(inputs)
	return en_package_upload(inputs)
});