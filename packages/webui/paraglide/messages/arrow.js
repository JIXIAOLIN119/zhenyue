/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ArrowInputs */

const zh_arrow = /** @type {(inputs: ArrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`箭头`)
};

const en_arrow = /** @type {(inputs: ArrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arrow`)
};

/**
* | output |
* | --- |
* | "Arrow" |
*
* @param {ArrowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const arrow = /** @type {((inputs?: ArrowInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ArrowInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_arrow(inputs)
	return en_arrow(inputs)
});