/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} CustomInputs */

const zh_custom = /** @type {(inputs: CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义`)
};

const en_custom = /** @type {(inputs: CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom`)
};

/**
* | output |
* | --- |
* | "Custom" |
*
* @param {CustomInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const custom = /** @type {((inputs?: CustomInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<CustomInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_custom(inputs)
	return en_custom(inputs)
});