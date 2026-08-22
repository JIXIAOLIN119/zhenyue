/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Other_UploadsInputs */

const zh_other_uploads = /** @type {(inputs: Other_UploadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他上传`)
};

const en_other_uploads = /** @type {(inputs: Other_UploadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other Uploads`)
};

/**
* | output |
* | --- |
* | "Other Uploads" |
*
* @param {Other_UploadsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const other_uploads = /** @type {((inputs?: Other_UploadsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Other_UploadsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_other_uploads(inputs)
	return en_other_uploads(inputs)
});