/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Added_To_Share_LinkInputs */

const zh_added_to_share_link = /** @type {(inputs: Added_To_Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已添加到分享链接`)
};

const en_added_to_share_link = /** @type {(inputs: Added_To_Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Added to share link`)
};

/**
* | output |
* | --- |
* | "Added to share link" |
*
* @param {Added_To_Share_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const added_to_share_link = /** @type {((inputs?: Added_To_Share_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Added_To_Share_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_added_to_share_link(inputs)
	return en_added_to_share_link(inputs)
});