/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Type_ChatInputs */

const zh_agent_type_chat = /** @type {(inputs: Agent_Type_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对话`)
};

const en_agent_type_chat = /** @type {(inputs: Agent_Type_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat`)
};

/**
* | output |
* | --- |
* | "Chat" |
*
* @param {Agent_Type_ChatInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_type_chat = /** @type {((inputs?: Agent_Type_ChatInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Type_ChatInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_type_chat(inputs)
	return en_agent_type_chat(inputs)
});