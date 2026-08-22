/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} OriginalInputs */

const zh_original = /** @type {(inputs: OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原始`)
};

const en_original = /** @type {(inputs: OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Original`)
};

/**
* | output |
* | --- |
* | "Original" |
*
* @param {OriginalInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const original = /** @type {((inputs?: OriginalInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<OriginalInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_original(inputs)
	return en_original(inputs)
});