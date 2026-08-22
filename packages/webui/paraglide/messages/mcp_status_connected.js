/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Status_ConnectedInputs */

const zh_mcp_status_connected = /** @type {(inputs: Mcp_Status_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已连接`)
};

const en_mcp_status_connected = /** @type {(inputs: Mcp_Status_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connected`)
};

/**
* | output |
* | --- |
* | "Connected" |
*
* @param {Mcp_Status_ConnectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_status_connected = /** @type {((inputs?: Mcp_Status_ConnectedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Status_ConnectedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_status_connected(inputs)
	return en_mcp_status_connected(inputs)
});