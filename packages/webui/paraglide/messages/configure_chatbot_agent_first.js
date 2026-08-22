/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Configure_Chatbot_Agent_FirstInputs */

const zh_configure_chatbot_agent_first = /** @type {(inputs: Configure_Chatbot_Agent_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先在团队设置中配置聊天机器人智能体。`)
};

const en_configure_chatbot_agent_first = /** @type {(inputs: Configure_Chatbot_Agent_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please configure a chatbot agent in team settings first.`)
};

/**
* | output |
* | --- |
* | "Please configure a chatbot agent in team settings first." |
*
* @param {Configure_Chatbot_Agent_FirstInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const configure_chatbot_agent_first = /** @type {((inputs?: Configure_Chatbot_Agent_FirstInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Configure_Chatbot_Agent_FirstInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_configure_chatbot_agent_first(inputs)
	return en_configure_chatbot_agent_first(inputs)
});