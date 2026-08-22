/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Status_FailedInputs */

const zh_mcp_status_failed = /** @type {(inputs: Mcp_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`连接失败`)
};

const en_mcp_status_failed = /** @type {(inputs: Mcp_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed`)
};

/**
* | output |
* | --- |
* | "Failed" |
*
* @param {Mcp_Status_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_status_failed = /** @type {((inputs?: Mcp_Status_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Status_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_status_failed(inputs)
	return en_mcp_status_failed(inputs)
});