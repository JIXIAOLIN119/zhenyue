/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Collection_RenamedInputs */

const zh_collection_renamed = /** @type {(inputs: Collection_RenamedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体合集已重命名`)
};

const en_collection_renamed = /** @type {(inputs: Collection_RenamedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collection renamed`)
};

/**
* | output |
* | --- |
* | "Collection renamed" |
*
* @param {Collection_RenamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const collection_renamed = /** @type {((inputs?: Collection_RenamedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Collection_RenamedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_collection_renamed(inputs)
	return en_collection_renamed(inputs)
});