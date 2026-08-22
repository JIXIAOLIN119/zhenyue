/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_ProviderInputs */

const zh_add_provider = /** @type {(inputs: Add_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加提供商`)
};

const en_add_provider = /** @type {(inputs: Add_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Provider`)
};

/**
* | output |
* | --- |
* | "Add Provider" |
*
* @param {Add_ProviderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_provider = /** @type {((inputs?: Add_ProviderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_ProviderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_provider(inputs)
	return en_add_provider(inputs)
});