/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Logs_DescriptionInputs */

const zh_agent_logs_description = /** @type {(inputs: Agent_Logs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体后台任务和工具调用的逐步执行跟踪。`)
};

const en_agent_logs_description = /** @type {(inputs: Agent_Logs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Step-by-step execution trace of the agent's background tasks and tool calls.`)
};

/**
* | output |
* | --- |
* | "Step-by-step execution trace of the agent's background tasks and tool calls." |
*
* @param {Agent_Logs_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_logs_description = /** @type {((inputs?: Agent_Logs_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Logs_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_logs_description(inputs)
	return en_agent_logs_description(inputs)
});