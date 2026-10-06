/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Create_Share_LinkInputs */

const zh_failed_create_share_link = /** @type {(inputs: Failed_Create_Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建分享链接失败`)
};

const en_failed_create_share_link = /** @type {(inputs: Failed_Create_Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to create share link`)
};

/**
* | output |
* | --- |
* | "Failed to create share link" |
*
* @param {Failed_Create_Share_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_create_share_link = /** @type {((inputs?: Failed_Create_Share_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Create_Share_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_create_share_link(inputs)
	return en_failed_create_share_link(inputs)
});