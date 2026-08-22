/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Test_FailedInputs */

const zh_mcp_test_failed = /** @type {(inputs: Mcp_Test_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP 服务测试失败`)
};

const en_mcp_test_failed = /** @type {(inputs: Mcp_Test_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP server test failed`)
};

/**
* | output |
* | --- |
* | "MCP server test failed" |
*
* @param {Mcp_Test_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_test_failed = /** @type {((inputs?: Mcp_Test_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Test_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_test_failed(inputs)
	return en_mcp_test_failed(inputs)
});