/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ai_ProvidersInputs */

const zh_ai_providers = /** @type {(inputs: Ai_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 提供商`)
};

const en_ai_providers = /** @type {(inputs: Ai_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Providers`)
};

/**
* | output |
* | --- |
* | "AI Providers" |
*
* @param {Ai_ProvidersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai_providers = /** @type {((inputs?: Ai_ProvidersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ai_ProvidersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_ai_providers(inputs)
	return en_ai_providers(inputs)
});