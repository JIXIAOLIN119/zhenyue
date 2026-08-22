/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} At_MentionsInputs */

const zh_at_mentions = /** @type {(inputs: At_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`@提及`)
};

const en_at_mentions = /** @type {(inputs: At_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`@Mentions`)
};

/**
* | output |
* | --- |
* | "@Mentions" |
*
* @param {At_MentionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const at_mentions = /** @type {((inputs?: At_MentionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<At_MentionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_at_mentions(inputs)
	return en_at_mentions(inputs)
});