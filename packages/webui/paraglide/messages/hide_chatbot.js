/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Hide_ChatbotInputs */

const zh_hide_chatbot = /** @type {(inputs: Hide_ChatbotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏聊天机器人`)
};

const en_hide_chatbot = /** @type {(inputs: Hide_ChatbotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide Chatbot`)
};

/**
* | output |
* | --- |
* | "Hide Chatbot" |
*
* @param {Hide_ChatbotInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const hide_chatbot = /** @type {((inputs?: Hide_ChatbotInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hide_ChatbotInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_hide_chatbot(inputs)
	return en_hide_chatbot(inputs)
});