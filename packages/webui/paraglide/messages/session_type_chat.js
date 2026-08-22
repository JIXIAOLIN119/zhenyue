/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Session_Type_ChatInputs */

const zh_session_type_chat = /** @type {(inputs: Session_Type_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对话`)
};

const en_session_type_chat = /** @type {(inputs: Session_Type_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chat`)
};

/**
* | output |
* | --- |
* | "Chat" |
*
* @param {Session_Type_ChatInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const session_type_chat = /** @type {((inputs?: Session_Type_ChatInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Session_Type_ChatInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_session_type_chat(inputs)
	return en_session_type_chat(inputs)
});