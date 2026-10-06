/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Loading_CollectionInputs */

const zh_loading_collection = /** @type {(inputs: Loading_CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载媒体合集...`)
};

const en_loading_collection = /** @type {(inputs: Loading_CollectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading collection...`)
};

/**
* | output |
* | --- |
* | "Loading collection..." |
*
* @param {Loading_CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const loading_collection = /** @type {((inputs?: Loading_CollectionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loading_CollectionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_loading_collection(inputs)
	return en_loading_collection(inputs)
});