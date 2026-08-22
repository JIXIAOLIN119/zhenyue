/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Active_FiltersInputs */

const zh_active_filters = /** @type {(inputs: Active_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个激活`)
};

const en_active_filters = /** @type {(inputs: Active_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`active`)
};

/**
* | output |
* | --- |
* | "active" |
*
* @param {Active_FiltersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const active_filters = /** @type {((inputs?: Active_FiltersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Active_FiltersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_active_filters(inputs)
	return en_active_filters(inputs)
});