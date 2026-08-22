/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sample_BackdropInputs */

const zh_sample_backdrop = /** @type {(inputs: Sample_BackdropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`示例媒体`)
};

const en_sample_backdrop = /** @type {(inputs: Sample_BackdropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sample Media`)
};

/**
* | output |
* | --- |
* | "Sample Media" |
*
* @param {Sample_BackdropInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sample_backdrop = /** @type {((inputs?: Sample_BackdropInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sample_BackdropInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sample_backdrop(inputs)
	return en_sample_backdrop(inputs)
});