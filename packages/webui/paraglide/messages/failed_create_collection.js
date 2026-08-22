/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Create_CollectionInputs */

const zh_failed_create_collection = /** @type {(inputs: Failed_Create_CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建媒体合集失败`)
};

const en_failed_create_collection = /** @type {(inputs: Failed_Create_CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to create collection`)
};

/**
* | output |
* | --- |
* | "Failed to create collection" |
*
* @param {Failed_Create_CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_create_collection = /** @type {((inputs?: Failed_Create_CollectionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Create_CollectionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_create_collection(inputs)
	return en_failed_create_collection(inputs)
});