/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} TypeInputs */

const zh_type = /** @type {(inputs: TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`类型`)
};

const en_type = /** @type {(inputs: TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

/**
* | output |
* | --- |
* | "Type" |
*
* @param {TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const type = /** @type {((inputs?: TypeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<TypeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_type(inputs)
	return en_type(inputs)
});