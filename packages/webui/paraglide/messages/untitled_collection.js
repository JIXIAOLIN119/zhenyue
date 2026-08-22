/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Untitled_CollectionInputs */

const zh_untitled_collection = /** @type {(inputs: Untitled_CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未命名媒体合集`)
};

const en_untitled_collection = /** @type {(inputs: Untitled_CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Untitled Collection`)
};

/**
* | output |
* | --- |
* | "Untitled Collection" |
*
* @param {Untitled_CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const untitled_collection = /** @type {((inputs?: Untitled_CollectionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Untitled_CollectionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_untitled_collection(inputs)
	return en_untitled_collection(inputs)
});