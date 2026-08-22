/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} LineInputs */

const zh_line = /** @type {(inputs: LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`线条`)
};

const en_line = /** @type {(inputs: LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Line`)
};

/**
* | output |
* | --- |
* | "Line" |
*
* @param {LineInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const line = /** @type {((inputs?: LineInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<LineInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_line(inputs)
	return en_line(inputs)
});