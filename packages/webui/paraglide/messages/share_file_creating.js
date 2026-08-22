/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_File_CreatingInputs */

const zh_share_file_creating = /** @type {(inputs: Share_File_CreatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在创建分享链接…`)
};

const en_share_file_creating = /** @type {(inputs: Share_File_CreatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creating share link…`)
};

/**
* | output |
* | --- |
* | "Creating share link…" |
*
* @param {Share_File_CreatingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_file_creating = /** @type {((inputs?: Share_File_CreatingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_File_CreatingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_file_creating(inputs)
	return en_share_file_creating(inputs)
});