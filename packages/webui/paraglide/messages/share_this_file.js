/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_This_FileInputs */

const zh_share_this_file = /** @type {(inputs: Share_This_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享此文件`)
};

const en_share_this_file = /** @type {(inputs: Share_This_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share this file`)
};

/**
* | output |
* | --- |
* | "Share this file" |
*
* @param {Share_This_FileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_this_file = /** @type {((inputs?: Share_This_FileInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_This_FileInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_this_file(inputs)
	return en_share_this_file(inputs)
});