/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ClearInputs */

const zh_clear = /** @type {(inputs: ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清空`)
};

const en_clear = /** @type {(inputs: ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear`)
};

/**
* | output |
* | --- |
* | "Clear" |
*
* @param {ClearInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const clear = /** @type {((inputs?: ClearInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ClearInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_clear(inputs)
	return en_clear(inputs)
});