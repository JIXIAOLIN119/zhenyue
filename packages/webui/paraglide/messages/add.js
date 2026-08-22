/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} AddInputs */

const zh_add = /** @type {(inputs: AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加`)
};

const en_add = /** @type {(inputs: AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add`)
};

/**
* | output |
* | --- |
* | "Add" |
*
* @param {AddInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add = /** @type {((inputs?: AddInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<AddInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add(inputs)
	return en_add(inputs)
});