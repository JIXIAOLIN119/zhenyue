/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_File_DescriptionInputs */

const zh_share_file_description = /** @type {(inputs: Share_File_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同事打开此链接即可查看该文件与你的评论。`)
};

const en_share_file_description = /** @type {(inputs: Share_File_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colleagues can open this link to view this file and your comments.`)
};

/**
* | output |
* | --- |
* | "Colleagues can open this link to view this file and your comments." |
*
* @param {Share_File_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_file_description = /** @type {((inputs?: Share_File_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_File_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_file_description(inputs)
	return en_share_file_description(inputs)
});