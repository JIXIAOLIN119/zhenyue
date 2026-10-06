/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_AgentsInputs */

const zh_chat_agents = /** @type {(inputs: Chat_AgentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对话智能体`)
};

const en_chat_agents = /** @type {(inputs: Chat_AgentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat Agents`)
};

/**
* | output |
* | --- |
* | "Chat Agents" |
*
* @param {Chat_AgentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const chat_agents = /** @type {((inputs?: Chat_AgentsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_AgentsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_chat_agents(inputs)
	return en_chat_agents(inputs)
});