/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Collection_NameInputs */

const zh_collection_name = /** @type {(inputs: Collection_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体合集名称`)
};

const en_collection_name = /** @type {(inputs: Collection_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collection Name`)
};

/**
* | output |
* | --- |
* | "Collection Name" |
*
* @param {Collection_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const collection_name = /** @type {((inputs?: Collection_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Collection_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_collection_name(inputs)
	return en_collection_name(inputs)
});