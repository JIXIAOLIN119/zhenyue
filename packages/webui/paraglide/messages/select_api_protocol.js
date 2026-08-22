/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_Api_ProtocolInputs */

const zh_select_api_protocol = /** @type {(inputs: Select_Api_ProtocolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择 API 协议`)
};

const en_select_api_protocol = /** @type {(inputs: Select_Api_ProtocolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select API Protocol`)
};

/**
* | output |
* | --- |
* | "Select API Protocol" |
*
* @param {Select_Api_ProtocolInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_api_protocol = /** @type {((inputs?: Select_Api_ProtocolInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_Api_ProtocolInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_api_protocol(inputs)
	return en_select_api_protocol(inputs)
});