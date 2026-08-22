/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Network_Sandbox_Enabled_DescriptionInputs */

const zh_network_sandbox_enabled_description = /** @type {(inputs: Network_Sandbox_Enabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`启用后，智能体的网络请求将受限于允许的域名列表。禁用时，允许所有网络请求。`)
};

const en_network_sandbox_enabled_description = /** @type {(inputs: Network_Sandbox_Enabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When enabled, network requests from the agent are restricted to allowed domains. When disabled, all network requests are permitted.`)
};

/**
* | output |
* | --- |
* | "When enabled, network requests from the agent are restricted to allowed domains. When disabled, all network requests are permitted." |
*
* @param {Network_Sandbox_Enabled_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const network_sandbox_enabled_description = /** @type {((inputs?: Network_Sandbox_Enabled_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Network_Sandbox_Enabled_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_network_sandbox_enabled_description(inputs)
	return en_network_sandbox_enabled_description(inputs)
});