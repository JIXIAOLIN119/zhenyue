/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ListInputs */

const zh_list = /** @type {(inputs: ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列表`)
};

const en_list = /** @type {(inputs: ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`List`)
};

/**
* | output |
* | --- |
* | "List" |
*
* @param {ListInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const list = /** @type {((inputs?: ListInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ListInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_list(inputs)
	return en_list(inputs)
});