/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Enter_Mcp_IdInputs */

const zh_enter_mcp_id = /** @type {(inputs: Enter_Mcp_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入 MCP 服务 ID`)
};

const en_enter_mcp_id = /** @type {(inputs: Enter_Mcp_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter MCP Server ID`)
};

/**
* | output |
* | --- |
* | "Enter MCP Server ID" |
*
* @param {Enter_Mcp_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enter_mcp_id = /** @type {((inputs?: Enter_Mcp_IdInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Enter_Mcp_IdInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_enter_mcp_id(inputs)
	return en_enter_mcp_id(inputs)
});