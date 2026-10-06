/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aspect_4_3Inputs */

const zh_aspect_4_3 = /** @type {(inputs: Aspect_4_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`4:3 标准`)
};

const en_aspect_4_3 = /** @type {(inputs: Aspect_4_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`4:3 Standard`)
};

/**
* | output |
* | --- |
* | "4:3 Standard" |
*
* @param {Aspect_4_3Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const aspect_4_3 = /** @type {((inputs?: Aspect_4_3Inputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aspect_4_3Inputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_aspect_4_3(inputs)
	return en_aspect_4_3(inputs)
});