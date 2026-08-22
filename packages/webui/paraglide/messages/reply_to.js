/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Reply_ToInputs */

const zh_reply_to = /** @type {(inputs: Reply_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复：`)
};

const en_reply_to = /** @type {(inputs: Reply_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`reply to:`)
};

/**
* | output |
* | --- |
* | "reply to:" |
*
* @param {Reply_ToInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const reply_to = /** @type {((inputs?: Reply_ToInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Reply_ToInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_reply_to(inputs)
	return en_reply_to(inputs)
});