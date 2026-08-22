/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aspect_RatioInputs */

const zh_aspect_ratio = /** @type {(inputs: Aspect_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`宽高比`)
};

const en_aspect_ratio = /** @type {(inputs: Aspect_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aspect Ratio`)
};

/**
* | output |
* | --- |
* | "Aspect Ratio" |
*
* @param {Aspect_RatioInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const aspect_ratio = /** @type {((inputs?: Aspect_RatioInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aspect_RatioInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_aspect_ratio(inputs)
	return en_aspect_ratio(inputs)
});