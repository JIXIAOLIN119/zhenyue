/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Aspect_9_16Inputs */

const zh_aspect_9_16 = /** @type {(inputs: Aspect_9_16Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`9:16 竖屏`)
};

const en_aspect_9_16 = /** @type {(inputs: Aspect_9_16Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`9:16 Vertical`)
};

/**
* | output |
* | --- |
* | "9:16 Vertical" |
*
* @param {Aspect_9_16Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const aspect_9_16 = /** @type {((inputs?: Aspect_9_16Inputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Aspect_9_16Inputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_aspect_9_16(inputs)
	return en_aspect_9_16(inputs)
});