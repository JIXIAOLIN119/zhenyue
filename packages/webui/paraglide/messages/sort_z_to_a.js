/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sort_Z_To_AInputs */

const zh_sort_z_to_a = /** @type {(inputs: Sort_Z_To_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z → A`)
};

const en_sort_z_to_a = /** @type {(inputs: Sort_Z_To_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z → A`)
};

/**
* | output |
* | --- |
* | "Z → A" |
*
* @param {Sort_Z_To_AInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_z_to_a = /** @type {((inputs?: Sort_Z_To_AInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_Z_To_AInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sort_z_to_a(inputs)
	return en_sort_z_to_a(inputs)
});