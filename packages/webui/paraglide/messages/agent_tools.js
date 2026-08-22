/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_ToolsInputs */

const zh_agent_tools = /** @type {(inputs: Agent_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工具`)
};

const en_agent_tools = /** @type {(inputs: Agent_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tools`)
};

/**
* | output |
* | --- |
* | "Tools" |
*
* @param {Agent_ToolsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tools = /** @type {((inputs?: Agent_ToolsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_ToolsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_tools(inputs)
	return en_agent_tools(inputs)
});