/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Exit_CompareInputs */

const zh_exit_compare = /** @type {(inputs: Exit_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出对比`)
};

const en_exit_compare = /** @type {(inputs: Exit_CompareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exit compare`)
};

/**
* | output |
* | --- |
* | "Exit compare" |
*
* @param {Exit_CompareInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const exit_compare = /** @type {((inputs?: Exit_CompareInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Exit_CompareInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_exit_compare(inputs)
	return en_exit_compare(inputs)
});