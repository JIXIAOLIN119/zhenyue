/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} New_ChatInputs */

const zh_new_chat = /** @type {(inputs: New_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开启新会话`)
};

const en_new_chat = /** @type {(inputs: New_ChatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Chat`)
};

/**
* | output |
* | --- |
* | "New Chat" |
*
* @param {New_ChatInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const new_chat = /** @type {((inputs?: New_ChatInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<New_ChatInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_new_chat(inputs)
	return en_new_chat(inputs)
});