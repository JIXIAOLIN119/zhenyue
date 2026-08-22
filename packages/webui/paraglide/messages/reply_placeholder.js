/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Reply_PlaceholderInputs */

const zh_reply_placeholder = /** @type {(inputs: Reply_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复...`)
};

const en_reply_placeholder = /** @type {(inputs: Reply_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply...`)
};

/**
* | output |
* | --- |
* | "Reply..." |
*
* @param {Reply_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const reply_placeholder = /** @type {((inputs?: Reply_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Reply_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_reply_placeholder(inputs)
	return en_reply_placeholder(inputs)
});