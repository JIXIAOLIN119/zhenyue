/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_LinksInputs */

const zh_share_links = /** @type {(inputs: Share_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享链接`)
};

const en_share_links = /** @type {(inputs: Share_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share Links`)
};

/**
* | output |
* | --- |
* | "Share Links" |
*
* @param {Share_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_links = /** @type {((inputs?: Share_LinksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_LinksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_links(inputs)
	return en_share_links(inputs)
});