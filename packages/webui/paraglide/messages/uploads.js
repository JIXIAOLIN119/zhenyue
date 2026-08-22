/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} UploadsInputs */

const zh_uploads = /** @type {(inputs: UploadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传管理`)
};

const en_uploads = /** @type {(inputs: UploadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploads`)
};

/**
* | output |
* | --- |
* | "Uploads" |
*
* @param {UploadsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const uploads = /** @type {((inputs?: UploadsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<UploadsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_uploads(inputs)
	return en_uploads(inputs)
});