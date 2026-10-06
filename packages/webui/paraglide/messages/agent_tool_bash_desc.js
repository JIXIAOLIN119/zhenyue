/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tool_Bash_DescInputs */

const zh_agent_tool_bash_desc = /** @type {(inputs: Agent_Tool_Bash_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`允许智能体在高度隔离的环境中运行终端/命令行命令。`)
};

const en_agent_tool_bash_desc = /** @type {(inputs: Agent_Tool_Bash_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allows the agent to run terminal/shell commands in a highly isolated environment.`)
};

/**
* | output |
* | --- |
* | "Allows the agent to run terminal/shell commands in a highly isolated environment." |
*
* @param {Agent_Tool_Bash_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_bash_desc = /** @type {((inputs?: Agent_Tool_Bash_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tool_Bash_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_tool_bash_desc(inputs)
	return en_agent_tool_bash_desc(inputs)
});