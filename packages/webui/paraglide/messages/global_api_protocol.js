/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Global_Api_ProtocolInputs */

const zh_global_api_protocol = /** @type {(inputs: Global_Api_ProtocolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全局 API 协议`)
};

const en_global_api_protocol = /** @type {(inputs: Global_Api_ProtocolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Global API Protocol`)
};

/**
* | output |
* | --- |
* | "Global API Protocol" |
*
* @param {Global_Api_ProtocolInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const global_api_protocol = /** @type {((inputs?: Global_Api_ProtocolInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Global_Api_ProtocolInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_global_api_protocol(inputs)
	return en_global_api_protocol(inputs)
});