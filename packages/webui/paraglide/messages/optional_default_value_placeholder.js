/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Optional_Default_Value_PlaceholderInputs */

const zh_optional_default_value_placeholder = /** @type {(inputs: Optional_Default_Value_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选默认值...`)
};

const en_optional_default_value_placeholder = /** @type {(inputs: Optional_Default_Value_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional default value...`)
};

/**
* | output |
* | --- |
* | "Optional default value..." |
*
* @param {Optional_Default_Value_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const optional_default_value_placeholder = /** @type {((inputs?: Optional_Default_Value_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Optional_Default_Value_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_optional_default_value_placeholder(inputs)
	return en_optional_default_value_placeholder(inputs)
});