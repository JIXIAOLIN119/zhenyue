/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Show_ChatbotInputs */

const zh_show_chatbot = /** @type {(inputs: Show_ChatbotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示聊天机器人`)
};

const en_show_chatbot = /** @type {(inputs: Show_ChatbotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show Chatbot`)
};

/**
* | output |
* | --- |
* | "Show Chatbot" |
*
* @param {Show_ChatbotInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const show_chatbot = /** @type {((inputs?: Show_ChatbotInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Show_ChatbotInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_show_chatbot(inputs)
	return en_show_chatbot(inputs)
});