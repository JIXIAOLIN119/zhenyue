/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tool_List_Assets_NameInputs */

const zh_agent_tool_list_assets_name = /** @type {(inputs: Agent_Tool_List_Assets_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览 帧阅`)
};

const en_agent_tool_list_assets_name = /** @type {(inputs: Agent_Tool_List_Assets_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse ZhenYue`)
};

/**
* | output |
* | --- |
* | "Browse ZhenYue" |
*
* @param {Agent_Tool_List_Assets_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_list_assets_name = /** @type {((inputs?: Agent_Tool_List_Assets_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tool_List_Assets_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_tool_list_assets_name(inputs)
	return en_agent_tool_list_assets_name(inputs)
});