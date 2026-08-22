/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tools_DescriptionInputs */

const zh_agent_tools_description = /** @type {(inputs: Agent_Tools_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置允许智能体使用的工具。`)
};

const en_agent_tools_description = /** @type {(inputs: Agent_Tools_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure which tools the agent is permitted to use.`)
};

/**
* | output |
* | --- |
* | "Configure which tools the agent is permitted to use." |
*
* @param {Agent_Tools_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tools_description = /** @type {((inputs?: Agent_Tools_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tools_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_tools_description(inputs)
	return en_agent_tools_description(inputs)
});