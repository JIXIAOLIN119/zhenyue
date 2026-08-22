/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} List_ViewInputs */

const zh_list_view = /** @type {(inputs: List_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列表视图`)
};

const en_list_view = /** @type {(inputs: List_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`List View`)
};

/**
* | output |
* | --- |
* | "List View" |
*
* @param {List_ViewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const list_view = /** @type {((inputs?: List_ViewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<List_ViewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_list_view(inputs)
	return en_list_view(inputs)
});