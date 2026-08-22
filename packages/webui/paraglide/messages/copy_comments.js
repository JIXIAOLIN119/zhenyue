/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Copy_CommentsInputs */

const zh_copy_comments = /** @type {(inputs: Copy_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制评论`)
};

const en_copy_comments = /** @type {(inputs: Copy_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy comments`)
};

/**
* | output |
* | --- |
* | "Copy comments" |
*
* @param {Copy_CommentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const copy_comments = /** @type {((inputs?: Copy_CommentsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Copy_CommentsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_copy_comments(inputs)
	return en_copy_comments(inputs)
});