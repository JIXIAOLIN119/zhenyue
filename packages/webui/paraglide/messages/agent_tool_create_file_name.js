/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tool_Create_File_NameInputs */

const zh_agent_tool_create_file_name = /** @type {(inputs: Agent_Tool_Create_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建文件`)
};

const en_agent_tool_create_file_name = /** @type {(inputs: Agent_Tool_Create_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create File`)
};

/**
* | output |
* | --- |
* | "Create File" |
*
* @param {Agent_Tool_Create_File_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_create_file_name = /** @type {((inputs?: Agent_Tool_Create_File_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tool_Create_File_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_tool_create_file_name(inputs)
	return en_agent_tool_create_file_name(inputs)
});