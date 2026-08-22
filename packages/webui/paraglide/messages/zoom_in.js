/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Zoom_InInputs */

const zh_zoom_in = /** @type {(inputs: Zoom_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放大`)
};

const en_zoom_in = /** @type {(inputs: Zoom_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoom In`)
};

/**
* | output |
* | --- |
* | "Zoom In" |
*
* @param {Zoom_InInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const zoom_in = /** @type {((inputs?: Zoom_InInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Zoom_InInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_zoom_in(inputs)
	return en_zoom_in(inputs)
});