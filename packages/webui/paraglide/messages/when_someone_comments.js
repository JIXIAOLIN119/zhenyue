/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} When_Someone_CommentsInputs */

const zh_when_someone_comments = /** @type {(inputs: When_Someone_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当有人评论素材时`)
};

const en_when_someone_comments = /** @type {(inputs: When_Someone_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When someone comments on an asset`)
};

/**
* | output |
* | --- |
* | "When someone comments on an asset" |
*
* @param {When_Someone_CommentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const when_someone_comments = /** @type {((inputs?: When_Someone_CommentsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<When_Someone_CommentsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_when_someone_comments(inputs)
	return en_when_someone_comments(inputs)
});