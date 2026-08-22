/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} All_CollectionsInputs */

const zh_all_collections = /** @type {(inputs: All_CollectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有媒体合集`)
};

const en_all_collections = /** @type {(inputs: All_CollectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Collections`)
};

/**
* | output |
* | --- |
* | "All Collections" |
*
* @param {All_CollectionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_collections = /** @type {((inputs?: All_CollectionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<All_CollectionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_all_collections(inputs)
	return en_all_collections(inputs)
});