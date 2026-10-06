/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Fetch_Share_LinksInputs */

const zh_failed_fetch_share_links = /** @type {(inputs: Failed_Fetch_Share_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取分享链接失败`)
};

const en_failed_fetch_share_links = /** @type {(inputs: Failed_Fetch_Share_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to fetch share links`)
};

/**
* | output |
* | --- |
* | "Failed to fetch share links" |
*
* @param {Failed_Fetch_Share_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_fetch_share_links = /** @type {((inputs?: Failed_Fetch_Share_LinksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Fetch_Share_LinksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_fetch_share_links(inputs)
	return en_failed_fetch_share_links(inputs)
});