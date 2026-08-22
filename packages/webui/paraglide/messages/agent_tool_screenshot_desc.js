/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tool_Screenshot_DescInputs */

const zh_agent_tool_screenshot_desc = /** @type {(inputs: Agent_Tool_Screenshot_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`允许智能体从视频文件中提取静态画面进行分析。`)
};

const en_agent_tool_screenshot_desc = /** @type {(inputs: Agent_Tool_Screenshot_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allows the agent to extract still image frames from video files for analysis.`)
};

/**
* | output |
* | --- |
* | "Allows the agent to extract still image frames from video files for analysis." |
*
* @param {Agent_Tool_Screenshot_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_screenshot_desc = /** @type {((inputs?: Agent_Tool_Screenshot_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tool_Screenshot_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_tool_screenshot_desc(inputs)
	return en_agent_tool_screenshot_desc(inputs)
});