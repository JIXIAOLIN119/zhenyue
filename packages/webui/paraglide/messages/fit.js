/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} FitInputs */

const zh_fit = /** @type {(inputs: FitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`适应窗口`)
};

const en_fit = /** @type {(inputs: FitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fit`)
};

/**
* | output |
* | --- |
* | "Fit" |
*
* @param {FitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const fit = /** @type {((inputs?: FitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<FitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_fit(inputs)
	return en_fit(inputs)
});