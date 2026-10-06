/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Message_PlaceholderInputs */

const zh_message_placeholder = /** @type {(inputs: Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送消息...`)
};

const en_message_placeholder = /** @type {(inputs: Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message...`)
};

/**
* | output |
* | --- |
* | "Message..." |
*
* @param {Message_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const message_placeholder = /** @type {((inputs?: Message_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Message_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_message_placeholder(inputs)
	return en_message_placeholder(inputs)
});