/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_And_RepliesInputs */

const zh_comments_and_replies = /** @type {(inputs: Comments_And_RepliesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论与回复`)
};

const en_comments_and_replies = /** @type {(inputs: Comments_And_RepliesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments & Replies`)
};

/**
* | output |
* | --- |
* | "Comments & Replies" |
*
* @param {Comments_And_RepliesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_and_replies = /** @type {((inputs?: Comments_And_RepliesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_And_RepliesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_comments_and_replies(inputs)
	return en_comments_and_replies(inputs)
});