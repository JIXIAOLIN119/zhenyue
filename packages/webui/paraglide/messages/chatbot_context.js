/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chatbot_ContextInputs */

const zh_chatbot_context = /** @type {(inputs: Chatbot_ContextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`聊天机器人上下文`)
};

const en_chatbot_context = /** @type {(inputs: Chatbot_ContextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chatbot Context`)
};

/**
* | output |
* | --- |
* | "Chatbot Context" |
*
* @param {Chatbot_ContextInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const chatbot_context = /** @type {((inputs?: Chatbot_ContextInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chatbot_ContextInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_chatbot_context(inputs)
	return en_chatbot_context(inputs)
});