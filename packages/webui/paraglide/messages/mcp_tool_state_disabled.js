/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Tool_State_DisabledInputs */

const zh_mcp_tool_state_disabled = /** @type {(inputs: Mcp_Tool_State_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭`)
};

const en_mcp_tool_state_disabled = /** @type {(inputs: Mcp_Tool_State_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Off`)
};

/**
* | output |
* | --- |
* | "Off" |
*
* @param {Mcp_Tool_State_DisabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_tool_state_disabled = /** @type {((inputs?: Mcp_Tool_State_DisabledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Tool_State_DisabledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mcp_tool_state_disabled(inputs)
	return en_mcp_tool_state_disabled(inputs)
});