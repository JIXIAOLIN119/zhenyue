/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_AgentInputs */

const zh_chat_agent = /** @type {(inputs: Chat_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对话智能体`)
};

const en_chat_agent = /** @type {(inputs: Chat_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat Agent`)
};

/**
* | output |
* | --- |
* | "Chat Agent" |
*
* @param {Chat_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const chat_agent = /** @type {((inputs?: Chat_AgentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_AgentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_chat_agent(inputs)
	return en_chat_agent(inputs)
});