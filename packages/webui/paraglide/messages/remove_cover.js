/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Remove_CoverInputs */

const zh_remove_cover = /** @type {(inputs: Remove_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除封面`)
};

const en_remove_cover = /** @type {(inputs: Remove_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove Cover`)
};

/**
* | output |
* | --- |
* | "Remove Cover" |
*
* @param {Remove_CoverInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove_cover = /** @type {((inputs?: Remove_CoverInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Remove_CoverInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_remove_cover(inputs)
	return en_remove_cover(inputs)
});