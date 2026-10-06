/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_Collection_ConfirmInputs */

const zh_delete_collection_confirm = /** @type {(inputs: Delete_Collection_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除媒体合集？`)
};

const en_delete_collection_confirm = /** @type {(inputs: Delete_Collection_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete Collection?`)
};

/**
* | output |
* | --- |
* | "Delete Collection?" |
*
* @param {Delete_Collection_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_collection_confirm = /** @type {((inputs?: Delete_Collection_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_Collection_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_collection_confirm(inputs)
	return en_delete_collection_confirm(inputs)
});