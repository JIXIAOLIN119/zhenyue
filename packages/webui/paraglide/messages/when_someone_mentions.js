/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} When_Someone_MentionsInputs */

const zh_when_someone_mentions = /** @type {(inputs: When_Someone_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当有人在评论中 @提及你时`)
};

const en_when_someone_mentions = /** @type {(inputs: When_Someone_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When someone @mentions you in a comment`)
};

/**
* | output |
* | --- |
* | "When someone @mentions you in a comment" |
*
* @param {When_Someone_MentionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const when_someone_mentions = /** @type {((inputs?: When_Someone_MentionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<When_Someone_MentionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_when_someone_mentions(inputs)
	return en_when_someone_mentions(inputs)
});