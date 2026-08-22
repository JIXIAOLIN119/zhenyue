/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Tool_State_DirectInputs */

const zh_mcp_tool_state_direct = /** @type {(inputs: Mcp_Tool_State_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`直连`)
};

const en_mcp_tool_state_direct = /** @type {(inputs: Mcp_Tool_State_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direct`)
};

/**
* | output |
* | --- |
* | "Direct" |
*
* @param {Mcp_Tool_State_DirectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_tool_state_direct = /** @type {((inputs?: Mcp_Tool_State_DirectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Tool_State_DirectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_tool_state_direct(inputs)
	return en_mcp_tool_state_direct(inputs)
});