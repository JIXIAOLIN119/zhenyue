/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Network_SandboxInputs */

const zh_network_sandbox = /** @type {(inputs: Network_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网络沙箱`)
};

const en_network_sandbox = /** @type {(inputs: Network_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Network Sandbox`)
};

/**
* | output |
* | --- |
* | "Network Sandbox" |
*
* @param {Network_SandboxInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const network_sandbox = /** @type {((inputs?: Network_SandboxInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Network_SandboxInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_network_sandbox(inputs)
	return en_network_sandbox(inputs)
});