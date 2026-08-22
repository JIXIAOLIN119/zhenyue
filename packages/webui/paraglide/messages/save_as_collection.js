/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Save_As_CollectionInputs */

const zh_save_as_collection = /** @type {(inputs: Save_As_CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存为媒体合集`)
};

const en_save_as_collection = /** @type {(inputs: Save_As_CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save as collection`)
};

/**
* | output |
* | --- |
* | "Save as collection" |
*
* @param {Save_As_CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const save_as_collection = /** @type {((inputs?: Save_As_CollectionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Save_As_CollectionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_save_as_collection(inputs)
	return en_save_as_collection(inputs)
});