/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ReplyInputs */

const zh_reply = /** @type {(inputs: ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复`)
};

const en_reply = /** @type {(inputs: ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply`)
};

/**
* | output |
* | --- |
* | "Reply" |
*
* @param {ReplyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const reply = /** @type {((inputs?: ReplyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ReplyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_reply(inputs)
	return en_reply(inputs)
});