/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Link_CopiedInputs */

const zh_link_copied = /** @type {(inputs: Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接已复制到剪贴板`)
};

const en_link_copied = /** @type {(inputs: Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link copied to clipboard`)
};

/**
* | output |
* | --- |
* | "Link copied to clipboard" |
*
* @param {Link_CopiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const link_copied = /** @type {((inputs?: Link_CopiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Link_CopiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_link_copied(inputs)
	return en_link_copied(inputs)
});