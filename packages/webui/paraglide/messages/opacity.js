/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} OpacityInputs */

const zh_opacity = /** @type {(inputs: OpacityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`透明度`)
};

const en_opacity = /** @type {(inputs: OpacityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opacity`)
};

/**
* | output |
* | --- |
* | "Opacity" |
*
* @param {OpacityInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const opacity = /** @type {((inputs?: OpacityInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<OpacityInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_opacity(inputs)
	return en_opacity(inputs)
});