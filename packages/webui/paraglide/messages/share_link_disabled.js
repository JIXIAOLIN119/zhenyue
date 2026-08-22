/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_Link_DisabledInputs */

const zh_share_link_disabled = /** @type {(inputs: Share_Link_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此分享链接已禁用`)
};

const en_share_link_disabled = /** @type {(inputs: Share_Link_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This share link is disabled`)
};

/**
* | output |
* | --- |
* | "This share link is disabled" |
*
* @param {Share_Link_DisabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_link_disabled = /** @type {((inputs?: Share_Link_DisabledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_Link_DisabledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_link_disabled(inputs)
	return en_share_link_disabled(inputs)
});