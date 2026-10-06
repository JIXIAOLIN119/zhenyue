/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Toggle_UncheckedInputs */

const zh_toggle_unchecked = /** @type {(inputs: Toggle_UncheckedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未选中`)
};

const en_toggle_unchecked = /** @type {(inputs: Toggle_UncheckedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unchecked`)
};

/**
* | output |
* | --- |
* | "Unchecked" |
*
* @param {Toggle_UncheckedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const toggle_unchecked = /** @type {((inputs?: Toggle_UncheckedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Toggle_UncheckedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_toggle_unchecked(inputs)
	return en_toggle_unchecked(inputs)
});