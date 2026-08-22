/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tool_Create_Version_DescInputs */

const zh_agent_tool_create_version_desc = /** @type {(inputs: Agent_Tool_Create_Version_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`允许智能体在 帧阅 中为已有文件上传并叠加新版本。`)
};

const en_agent_tool_create_version_desc = /** @type {(inputs: Agent_Tool_Create_Version_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allows the agent to upload and stack a new version of an existing file in ZhenYue.`)
};

/**
* | output |
* | --- |
* | "Allows the agent to upload and stack a new version of an existing file in ZhenYue." |
*
* @param {Agent_Tool_Create_Version_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_create_version_desc = /** @type {((inputs?: Agent_Tool_Create_Version_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tool_Create_Version_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_tool_create_version_desc(inputs)
	return en_agent_tool_create_version_desc(inputs)
});