/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Enlarged_ViewInputs */

const zh_enlarged_view = /** @type {(inputs: Enlarged_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放大视图`)
};

const en_enlarged_view = /** @type {(inputs: Enlarged_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlarged view`)
};

/**
* | output |
* | --- |
* | "Enlarged view" |
*
* @param {Enlarged_ViewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enlarged_view = /** @type {((inputs?: Enlarged_ViewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Enlarged_ViewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_enlarged_view(inputs)
	return en_enlarged_view(inputs)
});