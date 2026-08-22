/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Configure_Provider_DescriptionInputs */

const zh_configure_provider_description = /** @type {(inputs: Configure_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置 AI 提供商的身份验证和模型详情。`)
};

const en_configure_provider_description = /** @type {(inputs: Configure_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure authentication and model details for your AI provider.`)
};

/**
* | output |
* | --- |
* | "Configure authentication and model details for your AI provider." |
*
* @param {Configure_Provider_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const configure_provider_description = /** @type {((inputs?: Configure_Provider_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Configure_Provider_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_configure_provider_description(inputs)
	return en_configure_provider_description(inputs)
});