/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Session_Type_CommentInputs */

const zh_session_type_comment = /** @type {(inputs: Session_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const en_session_type_comment = /** @type {(inputs: Session_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment`)
};

/**
* | output |
* | --- |
* | "Comment" |
*
* @param {Session_Type_CommentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const session_type_comment = /** @type {((inputs?: Session_Type_CommentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Session_Type_CommentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_session_type_comment(inputs)
	return en_session_type_comment(inputs)
});