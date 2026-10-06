/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Uploading_StatusInputs */

const zh_uploading_status = /** @type {(inputs: Uploading_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传中`)
};

const en_uploading_status = /** @type {(inputs: Uploading_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploading`)
};

/**
* | output |
* | --- |
* | "Uploading" |
*
* @param {Uploading_StatusInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const uploading_status = /** @type {((inputs?: Uploading_StatusInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Uploading_StatusInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_uploading_status(inputs)
	return en_uploading_status(inputs)
});