/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Status_Not_ConnectedInputs */

const zh_mcp_status_not_connected = /** @type {(inputs: Mcp_Status_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未连接`)
};

const en_mcp_status_not_connected = /** @type {(inputs: Mcp_Status_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not Connected`)
};

/**
* | output |
* | --- |
* | "Not Connected" |
*
* @param {Mcp_Status_Not_ConnectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_status_not_connected = /** @type {((inputs?: Mcp_Status_Not_ConnectedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Status_Not_ConnectedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_status_not_connected(inputs)
	return en_mcp_status_not_connected(inputs)
});