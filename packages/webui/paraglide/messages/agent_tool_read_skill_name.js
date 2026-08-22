/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tool_Read_Skill_NameInputs */

const zh_agent_tool_read_skill_name = /** @type {(inputs: Agent_Tool_Read_Skill_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`读取技能`)
};

const en_agent_tool_read_skill_name = /** @type {(inputs: Agent_Tool_Read_Skill_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read Skills`)
};

/**
* | output |
* | --- |
* | "Read Skills" |
*
* @param {Agent_Tool_Read_Skill_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_read_skill_name = /** @type {((inputs?: Agent_Tool_Read_Skill_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tool_Read_Skill_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_tool_read_skill_name(inputs)
	return en_agent_tool_read_skill_name(inputs)
});