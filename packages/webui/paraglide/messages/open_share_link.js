/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Open_Share_LinkInputs */

const zh_open_share_link = /** @type {(inputs: Open_Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开分享链接`)
};

const en_open_share_link = /** @type {(inputs: Open_Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open Share Link`)
};

/**
* | output |
* | --- |
* | "Open Share Link" |
*
* @param {Open_Share_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const open_share_link = /** @type {((inputs?: Open_Share_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Open_Share_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_open_share_link(inputs)
	return en_open_share_link(inputs)
});