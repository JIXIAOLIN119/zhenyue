/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tool_Read_Skill_DescInputs */

const zh_agent_tool_read_skill_desc = /** @type {(inputs: Agent_Tool_Read_Skill_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`允许智能体加载和读取技能定义以执行特定操作。`)
};

const en_agent_tool_read_skill_desc = /** @type {(inputs: Agent_Tool_Read_Skill_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allows the agent to load and read skill definitions to perform specialized actions.`)
};

/**
* | output |
* | --- |
* | "Allows the agent to load and read skill definitions to perform specialized actions." |
*
* @param {Agent_Tool_Read_Skill_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_read_skill_desc = /** @type {((inputs?: Agent_Tool_Read_Skill_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tool_Read_Skill_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_tool_read_skill_desc(inputs)
	return en_agent_tool_read_skill_desc(inputs)
});