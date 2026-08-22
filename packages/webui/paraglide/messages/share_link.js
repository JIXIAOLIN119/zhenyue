/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_LinkInputs */

const zh_share_link = /** @type {(inputs: Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享链接`)
};

const en_share_link = /** @type {(inputs: Share_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`share link`)
};

/**
* | output |
* | --- |
* | "share link" |
*
* @param {Share_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_link = /** @type {((inputs?: Share_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_link(inputs)
	return en_share_link(inputs)
});