/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_Comment_DescriptionInputs */

const zh_delete_comment_description = /** @type {(inputs: Delete_Comment_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`您确定要删除这条评论吗？此操作将无法撤回。`)
};

const en_delete_comment_description = /** @type {(inputs: Delete_Comment_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are you sure you want to delete this comment? This action cannot be undone.`)
};

/**
* | output |
* | --- |
* | "Are you sure you want to delete this comment? This action cannot be undone." |
*
* @param {Delete_Comment_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_comment_description = /** @type {((inputs?: Delete_Comment_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_Comment_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_comment_description(inputs)
	return en_delete_comment_description(inputs)
});