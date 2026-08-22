/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Enable_Network_SandboxInputs */

const zh_enable_network_sandbox = /** @type {(inputs: Enable_Network_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`启用网络沙箱`)
};

const en_enable_network_sandbox = /** @type {(inputs: Enable_Network_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable Network Sandbox`)
};

/**
* | output |
* | --- |
* | "Enable Network Sandbox" |
*
* @param {Enable_Network_SandboxInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enable_network_sandbox = /** @type {((inputs?: Enable_Network_SandboxInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Enable_Network_SandboxInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_enable_network_sandbox(inputs)
	return en_enable_network_sandbox(inputs)
});