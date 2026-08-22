/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tool_Analyze_Image_NameInputs */

const zh_agent_tool_analyze_image_name = /** @type {(inputs: Agent_Tool_Analyze_Image_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分析图片`)
};

const en_agent_tool_analyze_image_name = /** @type {(inputs: Agent_Tool_Analyze_Image_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analyze Image`)
};

/**
* | output |
* | --- |
* | "Analyze Image" |
*
* @param {Agent_Tool_Analyze_Image_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_analyze_image_name = /** @type {((inputs?: Agent_Tool_Analyze_Image_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tool_Analyze_Image_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_tool_analyze_image_name(inputs)
	return en_agent_tool_analyze_image_name(inputs)
});