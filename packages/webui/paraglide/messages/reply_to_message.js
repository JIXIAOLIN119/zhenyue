/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ message: NonNullable<unknown> }} Reply_To_MessageInputs */

const zh_reply_to_message = /** @type {(inputs: Reply_To_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`回复：${i?.message}`)
};

const en_reply_to_message = /** @type {(inputs: Reply_To_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`reply to: ${i?.message}`)
};

/**
* | output |
* | --- |
* | "reply to: {message}" |
*
* @param {Reply_To_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const reply_to_message = /** @type {((inputs: Reply_To_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Reply_To_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_reply_to_message(inputs)
	return en_reply_to_message(inputs)
});