/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Read_OnlyInputs */

const zh_read_only = /** @type {(inputs: Read_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只读`)
};

const en_read_only = /** @type {(inputs: Read_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read-only`)
};

/**
* | output |
* | --- |
* | "Read-only" |
*
* @param {Read_OnlyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const read_only = /** @type {((inputs?: Read_OnlyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Read_OnlyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_read_only(inputs)
	return en_read_only(inputs)
});