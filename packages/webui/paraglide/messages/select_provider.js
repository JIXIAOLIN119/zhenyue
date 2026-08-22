/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_ProviderInputs */

const zh_select_provider = /** @type {(inputs: Select_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择提供商`)
};

const en_select_provider = /** @type {(inputs: Select_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select Provider`)
};

/**
* | output |
* | --- |
* | "Select Provider" |
*
* @param {Select_ProviderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_provider = /** @type {((inputs?: Select_ProviderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_ProviderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_provider(inputs)
	return en_select_provider(inputs)
});