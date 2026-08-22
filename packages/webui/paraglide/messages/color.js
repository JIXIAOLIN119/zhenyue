/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ColorInputs */

const zh_color = /** @type {(inputs: ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`颜色`)
};

const en_color = /** @type {(inputs: ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Color`)
};

/**
* | output |
* | --- |
* | "Color" |
*
* @param {ColorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const color = /** @type {((inputs?: ColorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ColorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_color(inputs)
	return en_color(inputs)
});