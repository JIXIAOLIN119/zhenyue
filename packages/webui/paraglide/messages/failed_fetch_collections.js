/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Fetch_CollectionsInputs */

const zh_failed_fetch_collections = /** @type {(inputs: Failed_Fetch_CollectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取媒体合集失败`)
};

const en_failed_fetch_collections = /** @type {(inputs: Failed_Fetch_CollectionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to fetch collections`)
};

/**
* | output |
* | --- |
* | "Failed to fetch collections" |
*
* @param {Failed_Fetch_CollectionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_fetch_collections = /** @type {((inputs?: Failed_Fetch_CollectionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Fetch_CollectionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_fetch_collections(inputs)
	return en_failed_fetch_collections(inputs)
});