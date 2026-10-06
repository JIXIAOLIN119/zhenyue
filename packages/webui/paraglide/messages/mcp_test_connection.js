/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Test_ConnectionInputs */

const zh_mcp_test_connection = /** @type {(inputs: Mcp_Test_ConnectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试连接`)
};

const en_mcp_test_connection = /** @type {(inputs: Mcp_Test_ConnectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test Connection`)
};

/**
* | output |
* | --- |
* | "Test Connection" |
*
* @param {Mcp_Test_ConnectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_test_connection = /** @type {((inputs?: Mcp_Test_ConnectionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Test_ConnectionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_test_connection(inputs)
	return en_mcp_test_connection(inputs)
});