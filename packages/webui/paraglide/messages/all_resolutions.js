/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} All_ResolutionsInputs */

const zh_all_resolutions = /** @type {(inputs: All_ResolutionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有分辨率`)
};

const en_all_resolutions = /** @type {(inputs: All_ResolutionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All resolutions`)
};

/**
* | output |
* | --- |
* | "All resolutions" |
*
* @param {All_ResolutionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_resolutions = /** @type {((inputs?: All_ResolutionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<All_ResolutionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_all_resolutions(inputs)
	return en_all_resolutions(inputs)
});