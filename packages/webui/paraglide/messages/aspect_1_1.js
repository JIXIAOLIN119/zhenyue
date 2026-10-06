/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aspect_1_1Inputs */

const zh_aspect_1_1 = /** @type {(inputs: Aspect_1_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1:1 正方形`)
};

const en_aspect_1_1 = /** @type {(inputs: Aspect_1_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1:1 Square`)
};

/**
* | output |
* | --- |
* | "1:1 Square" |
*
* @param {Aspect_1_1Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const aspect_1_1 = /** @type {((inputs?: Aspect_1_1Inputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aspect_1_1Inputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_aspect_1_1(inputs)
	return en_aspect_1_1(inputs)
});