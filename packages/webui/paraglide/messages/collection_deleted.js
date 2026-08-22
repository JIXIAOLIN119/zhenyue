/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Collection_DeletedInputs */

const zh_collection_deleted = /** @type {(inputs: Collection_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体合集已删除`)
};

const en_collection_deleted = /** @type {(inputs: Collection_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collection deleted`)
};

/**
* | output |
* | --- |
* | "Collection deleted" |
*
* @param {Collection_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const collection_deleted = /** @type {((inputs?: Collection_DeletedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Collection_DeletedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_collection_deleted(inputs)
	return en_collection_deleted(inputs)
});