/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Your_UploadsInputs */

const zh_your_uploads = /** @type {(inputs: Your_UploadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的上传`)
};

const en_your_uploads = /** @type {(inputs: Your_UploadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Uploads`)
};

/**
* | output |
* | --- |
* | "Your Uploads" |
*
* @param {Your_UploadsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const your_uploads = /** @type {((inputs?: Your_UploadsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Your_UploadsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_your_uploads(inputs)
	return en_your_uploads(inputs)
});