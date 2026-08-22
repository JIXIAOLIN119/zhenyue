/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Create_Share_LinkInputs */

const zh_create_share_link = /** @type {(inputs: Create_Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建分享链接`)
};

const en_create_share_link = /** @type {(inputs: Create_Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create Share Link`)
};

/**
* | output |
* | --- |
* | "Create Share Link" |
*
* @param {Create_Share_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_share_link = /** @type {((inputs?: Create_Share_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Create_Share_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_create_share_link(inputs)
	return en_create_share_link(inputs)
});