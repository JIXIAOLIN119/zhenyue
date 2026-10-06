/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_Share_Link_ConfirmInputs */

const zh_delete_share_link_confirm = /** @type {(inputs: Delete_Share_Link_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除分享链接？`)
};

const en_delete_share_link_confirm = /** @type {(inputs: Delete_Share_Link_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete Share Link?`)
};

/**
* | output |
* | --- |
* | "Delete Share Link?" |
*
* @param {Delete_Share_Link_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_share_link_confirm = /** @type {((inputs?: Delete_Share_Link_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_Share_Link_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_share_link_confirm(inputs)
	return en_delete_share_link_confirm(inputs)
});