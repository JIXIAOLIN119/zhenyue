/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Global_Chatbot_DescriptionInputs */

const zh_global_chatbot_description = /** @type {(inputs: Global_Chatbot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择在全局聊天机器人边栏中进行对话的智能体。`)
};

const en_global_chatbot_description = /** @type {(inputs: Global_Chatbot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select the agent that handles conversation inside the global chatbot sidebar.`)
};

/**
* | output |
* | --- |
* | "Select the agent that handles conversation inside the global chatbot sidebar." |
*
* @param {Global_Chatbot_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const global_chatbot_description = /** @type {((inputs?: Global_Chatbot_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Global_Chatbot_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_global_chatbot_description(inputs)
	return en_global_chatbot_description(inputs)
});