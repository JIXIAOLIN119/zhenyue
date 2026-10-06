/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Provider_Name_PlaceholderInputs */

const zh_provider_name_placeholder = /** @type {(inputs: Provider_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：我的 OpenAI`)
};

const en_provider_name_placeholder = /** @type {(inputs: Provider_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g., My OpenAI`)
};

/**
* | output |
* | --- |
* | "e.g., My OpenAI" |
*
* @param {Provider_Name_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_name_placeholder = /** @type {((inputs?: Provider_Name_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Provider_Name_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_provider_name_placeholder(inputs)
	return en_provider_name_placeholder(inputs)
});