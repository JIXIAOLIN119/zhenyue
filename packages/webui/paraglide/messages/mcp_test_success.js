/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Test_SuccessInputs */

const zh_mcp_test_success = /** @type {(inputs: Mcp_Test_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP 服务测试成功`)
};

const en_mcp_test_success = /** @type {(inputs: Mcp_Test_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP server test successful`)
};

/**
* | output |
* | --- |
* | "MCP server test successful" |
*
* @param {Mcp_Test_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_test_success = /** @type {((inputs?: Mcp_Test_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Test_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_test_success(inputs)
	return en_mcp_test_success(inputs)
});