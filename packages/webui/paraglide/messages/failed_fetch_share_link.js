/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Fetch_Share_LinkInputs */

const zh_failed_fetch_share_link = /** @type {(inputs: Failed_Fetch_Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取分享链接失败`)
};

const en_failed_fetch_share_link = /** @type {(inputs: Failed_Fetch_Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to fetch share link`)
};

/**
* | output |
* | --- |
* | "Failed to fetch share link" |
*
* @param {Failed_Fetch_Share_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_fetch_share_link = /** @type {((inputs?: Failed_Fetch_Share_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Fetch_Share_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_fetch_share_link(inputs)
	return en_failed_fetch_share_link(inputs)
});