/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Default_ValueInputs */

const zh_default_value = /** @type {(inputs: Default_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`默认值`)
};

const en_default_value = /** @type {(inputs: Default_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Default Value`)
};

/**
* | output |
* | --- |
* | "Default Value" |
*
* @param {Default_ValueInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const default_value = /** @type {((inputs?: Default_ValueInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Default_ValueInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_default_value(inputs)
	return en_default_value(inputs)
});