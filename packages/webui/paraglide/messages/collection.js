/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} CollectionInputs */

const zh_collection = /** @type {(inputs: CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体合集`)
};

const en_collection = /** @type {(inputs: CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`collection`)
};

/**
* | output |
* | --- |
* | "collection" |
*
* @param {CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const collection = /** @type {((inputs?: CollectionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<CollectionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_collection(inputs)
	return en_collection(inputs)
});