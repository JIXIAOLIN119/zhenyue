/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Configured_Ai_ProvidersInputs */

const zh_configured_ai_providers = /** @type {(inputs: Configured_Ai_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已配置的 AI 提供商`)
};

const en_configured_ai_providers = /** @type {(inputs: Configured_Ai_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configured AI Providers`)
};

/**
* | output |
* | --- |
* | "Configured AI Providers" |
*
* @param {Configured_Ai_ProvidersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const configured_ai_providers = /** @type {((inputs?: Configured_Ai_ProvidersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Configured_Ai_ProvidersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_configured_ai_providers(inputs)
	return en_configured_ai_providers(inputs)
});