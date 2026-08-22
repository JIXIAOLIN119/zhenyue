/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} CommentsInputs */

const zh_comments = /** @type {(inputs: CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const en_comments = /** @type {(inputs: CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments`)
};

/**
* | output |
* | --- |
* | "Comments" |
*
* @param {CommentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments = /** @type {((inputs?: CommentsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<CommentsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_comments(inputs)
	return en_comments(inputs)
});