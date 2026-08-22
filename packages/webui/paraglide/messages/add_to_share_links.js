/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_To_Share_LinksInputs */

const zh_add_to_share_links = /** @type {(inputs: Add_To_Share_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加到分享链接`)
};

const en_add_to_share_links = /** @type {(inputs: Add_To_Share_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add to Share Links`)
};

/**
* | output |
* | --- |
* | "Add to Share Links" |
*
* @param {Add_To_Share_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_to_share_links = /** @type {((inputs?: Add_To_Share_LinksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_To_Share_LinksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_to_share_links(inputs)
	return en_add_to_share_links(inputs)
});