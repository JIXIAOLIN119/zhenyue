/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_Link_RenamedInputs */

const zh_share_link_renamed = /** @type {(inputs: Share_Link_RenamedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享链接已重命名`)
};

const en_share_link_renamed = /** @type {(inputs: Share_Link_RenamedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share link renamed`)
};

/**
* | output |
* | --- |
* | "Share link renamed" |
*
* @param {Share_Link_RenamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_link_renamed = /** @type {((inputs?: Share_Link_RenamedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_Link_RenamedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_link_renamed(inputs)
	return en_share_link_renamed(inputs)
});