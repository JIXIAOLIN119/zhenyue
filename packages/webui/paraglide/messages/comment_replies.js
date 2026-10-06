/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comment_RepliesInputs */

const zh_comment_replies = /** @type {(inputs: Comment_RepliesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论回复`)
};

const en_comment_replies = /** @type {(inputs: Comment_RepliesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment Replies`)
};

/**
* | output |
* | --- |
* | "Comment Replies" |
*
* @param {Comment_RepliesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comment_replies = /** @type {((inputs?: Comment_RepliesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comment_RepliesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_comment_replies(inputs)
	return en_comment_replies(inputs)
});