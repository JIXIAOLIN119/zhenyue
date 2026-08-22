/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_TransportInputs */

const zh_mcp_transport = /** @type {(inputs: Mcp_TransportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`传输协议`)
};

const en_mcp_transport = /** @type {(inputs: Mcp_TransportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transport Protocol`)
};

/**
* | output |
* | --- |
* | "Transport Protocol" |
*
* @param {Mcp_TransportInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_transport = /** @type {((inputs?: Mcp_TransportInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_TransportInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_transport(inputs)
	return en_mcp_transport(inputs)
});