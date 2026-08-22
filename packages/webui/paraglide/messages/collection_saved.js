/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Collection_SavedInputs */

const zh_collection_saved = /** @type {(inputs: Collection_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体合集已保存`)
};

const en_collection_saved = /** @type {(inputs: Collection_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collection saved`)
};

/**
* | output |
* | --- |
* | "Collection saved" |
*
* @param {Collection_SavedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const collection_saved = /** @type {((inputs?: Collection_SavedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Collection_SavedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_collection_saved(inputs)
	return en_collection_saved(inputs)
});