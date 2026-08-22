/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} All_Share_Links_CountInputs */

const zh_all_share_links_count = /** @type {(inputs: All_Share_Links_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`所有分享链接 (${i?.count})`)
};

const en_all_share_links_count = /** @type {(inputs: All_Share_Links_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`All Share Links (${i?.count})`)
};

/**
* | output |
* | --- |
* | "All Share Links ({count})" |
*
* @param {All_Share_Links_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_share_links_count = /** @type {((inputs: All_Share_Links_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<All_Share_Links_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_all_share_links_count(inputs)
	return en_all_share_links_count(inputs)
});