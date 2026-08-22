/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Built_InInputs */

const zh_built_in = /** @type {(inputs: Built_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内置`)
};

const en_built_in = /** @type {(inputs: Built_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Built-in`)
};

/**
* | output |
* | --- |
* | "Built-in" |
*
* @param {Built_InInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const built_in = /** @type {((inputs?: Built_InInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Built_InInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_built_in(inputs)
	return en_built_in(inputs)
});