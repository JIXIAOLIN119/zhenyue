/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} QualityInputs */

const zh_quality = /** @type {(inputs: QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画质`)
};

const en_quality = /** @type {(inputs: QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quality`)
};

/**
* | output |
* | --- |
* | "Quality" |
*
* @param {QualityInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quality = /** @type {((inputs?: QualityInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<QualityInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quality(inputs)
	return en_quality(inputs)
});