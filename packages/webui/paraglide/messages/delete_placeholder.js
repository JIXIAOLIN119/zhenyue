/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_PlaceholderInputs */

const zh_delete_placeholder = /** @type {(inputs: Delete_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`delete`)
};

const en_delete_placeholder = /** @type {(inputs: Delete_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`delete`)
};

/**
* | output |
* | --- |
* | "delete" |
*
* @param {Delete_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_placeholder = /** @type {((inputs?: Delete_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_placeholder(inputs)
	return en_delete_placeholder(inputs)
});