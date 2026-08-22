/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Provider_NameInputs */

const zh_provider_name = /** @type {(inputs: Provider_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提供商名称`)
};

const en_provider_name = /** @type {(inputs: Provider_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provider Name`)
};

/**
* | output |
* | --- |
* | "Provider Name" |
*
* @param {Provider_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_name = /** @type {((inputs?: Provider_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Provider_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_provider_name(inputs)
	return en_provider_name(inputs)
});