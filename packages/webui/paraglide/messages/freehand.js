/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} FreehandInputs */

const zh_freehand = /** @type {(inputs: FreehandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手绘`)
};

const en_freehand = /** @type {(inputs: FreehandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Freehand`)
};

/**
* | output |
* | --- |
* | "Freehand" |
*
* @param {FreehandInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const freehand = /** @type {((inputs?: FreehandInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<FreehandInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_freehand(inputs)
	return en_freehand(inputs)
});