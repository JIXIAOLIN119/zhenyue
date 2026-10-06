/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} All_Share_LinksInputs */

const zh_all_share_links = /** @type {(inputs: All_Share_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有分享链接`)
};

const en_all_share_links = /** @type {(inputs: All_Share_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Share Links`)
};

/**
* | output |
* | --- |
* | "All Share Links" |
*
* @param {All_Share_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_share_links = /** @type {((inputs?: All_Share_LinksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<All_Share_LinksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_all_share_links(inputs)
	return en_all_share_links(inputs)
});