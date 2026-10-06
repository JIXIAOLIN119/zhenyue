/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} CollectionsInputs */

const zh_collections = /** @type {(inputs: CollectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体合集`)
};

const en_collections = /** @type {(inputs: CollectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collections`)
};

/**
* | output |
* | --- |
* | "Collections" |
*
* @param {CollectionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const collections = /** @type {((inputs?: CollectionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<CollectionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_collections(inputs)
	return en_collections(inputs)
});