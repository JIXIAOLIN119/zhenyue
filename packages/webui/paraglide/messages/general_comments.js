/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} General_CommentsInputs */

const zh_general_comments = /** @type {(inputs: General_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`普通评论`)
};

const en_general_comments = /** @type {(inputs: General_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`General Comments`)
};

/**
* | output |
* | --- |
* | "General Comments" |
*
* @param {General_CommentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const general_comments = /** @type {((inputs?: General_CommentsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<General_CommentsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_general_comments(inputs)
	return en_general_comments(inputs)
});