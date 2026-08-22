/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Fields_FoundInputs */

const zh_no_fields_found = /** @type {(inputs: No_Fields_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到字段`)
};

const en_no_fields_found = /** @type {(inputs: No_Fields_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No fields found`)
};

/**
* | output |
* | --- |
* | "No fields found" |
*
* @param {No_Fields_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_fields_found = /** @type {((inputs?: No_Fields_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Fields_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_fields_found(inputs)
	return en_no_fields_found(inputs)
});