/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Collection_CreatedInputs */

const zh_collection_created = /** @type {(inputs: Collection_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体合集已创建`)
};

const en_collection_created = /** @type {(inputs: Collection_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collection created`)
};

/**
* | output |
* | --- |
* | "Collection created" |
*
* @param {Collection_CreatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const collection_created = /** @type {((inputs?: Collection_CreatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Collection_CreatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_collection_created(inputs)
	return en_collection_created(inputs)
});