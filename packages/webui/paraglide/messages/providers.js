/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ProvidersInputs */

const zh_providers = /** @type {(inputs: ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提供商`)
};

const en_providers = /** @type {(inputs: ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Providers`)
};

/**
* | output |
* | --- |
* | "Providers" |
*
* @param {ProvidersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const providers = /** @type {((inputs?: ProvidersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ProvidersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_providers(inputs)
	return en_providers(inputs)
});