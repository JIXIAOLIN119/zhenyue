/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} BoxInputs */

const zh_box = /** @type {(inputs: BoxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`矩形`)
};

const en_box = /** @type {(inputs: BoxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Box`)
};

/**
* | output |
* | --- |
* | "Box" |
*
* @param {BoxInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const box = /** @type {((inputs?: BoxInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<BoxInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_box(inputs)
	return en_box(inputs)
});