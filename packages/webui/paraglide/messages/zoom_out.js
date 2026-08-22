/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Zoom_OutInputs */

const zh_zoom_out = /** @type {(inputs: Zoom_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缩小`)
};

const en_zoom_out = /** @type {(inputs: Zoom_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoom Out`)
};

/**
* | output |
* | --- |
* | "Zoom Out" |
*
* @param {Zoom_OutInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const zoom_out = /** @type {((inputs?: Zoom_OutInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Zoom_OutInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_zoom_out(inputs)
	return en_zoom_out(inputs)
});