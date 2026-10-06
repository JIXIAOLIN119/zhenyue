/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Share_Links_YetInputs */

const zh_no_share_links_yet = /** @type {(inputs: No_Share_Links_YetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无分享链接。`)
};

const en_no_share_links_yet = /** @type {(inputs: No_Share_Links_YetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No share links created yet.`)
};

/**
* | output |
* | --- |
* | "No share links created yet." |
*
* @param {No_Share_Links_YetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_share_links_yet = /** @type {((inputs?: No_Share_Links_YetInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Share_Links_YetInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_share_links_yet(inputs)
	return en_no_share_links_yet(inputs)
});