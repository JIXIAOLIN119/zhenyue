/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Processing_PackageInputs */

const zh_processing_package = /** @type {(inputs: Processing_PackageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在处理包...`)
};

const en_processing_package = /** @type {(inputs: Processing_PackageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processing package...`)
};

/**
* | output |
* | --- |
* | "Processing package..." |
*
* @param {Processing_PackageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const processing_package = /** @type {((inputs?: Processing_PackageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Processing_PackageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_processing_package(inputs)
	return en_processing_package(inputs)
});