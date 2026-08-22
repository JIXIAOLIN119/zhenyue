/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Network_Sandbox_DescriptionInputs */

const zh_network_sandbox_description = /** @type {(inputs: Network_Sandbox_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置沙箱智能体的域名访问控制。`)
};

const en_network_sandbox_description = /** @type {(inputs: Network_Sandbox_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure domain access controls for the sandboxed agent.`)
};

/**
* | output |
* | --- |
* | "Configure domain access controls for the sandboxed agent." |
*
* @param {Network_Sandbox_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const network_sandbox_description = /** @type {((inputs?: Network_Sandbox_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Network_Sandbox_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_network_sandbox_description(inputs)
	return en_network_sandbox_description(inputs)
});