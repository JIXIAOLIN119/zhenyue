/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Rename_CollectionInputs */

const zh_rename_collection = /** @type {(inputs: Rename_CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重命名媒体合集`)
};

const en_rename_collection = /** @type {(inputs: Rename_CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rename Collection`)
};

/**
* | output |
* | --- |
* | "Rename Collection" |
*
* @param {Rename_CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const rename_collection = /** @type {((inputs?: Rename_CollectionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Rename_CollectionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_rename_collection(inputs)
	return en_rename_collection(inputs)
});