/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_New_ProviderInputs */

const zh_add_new_provider = /** @type {(inputs: Add_New_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加新提供商`)
};

const en_add_new_provider = /** @type {(inputs: Add_New_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add New Provider`)
};

/**
* | output |
* | --- |
* | "Add New Provider" |
*
* @param {Add_New_ProviderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_new_provider = /** @type {((inputs?: Add_New_ProviderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_New_ProviderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_new_provider(inputs)
	return en_add_new_provider(inputs)
});