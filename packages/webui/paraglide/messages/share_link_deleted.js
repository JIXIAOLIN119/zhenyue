/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_Link_DeletedInputs */

const zh_share_link_deleted = /** @type {(inputs: Share_Link_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享链接已删除`)
};

const en_share_link_deleted = /** @type {(inputs: Share_Link_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share link deleted`)
};

/**
* | output |
* | --- |
* | "Share link deleted" |
*
* @param {Share_Link_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_link_deleted = /** @type {((inputs?: Share_Link_DeletedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_Link_DeletedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_link_deleted(inputs)
	return en_share_link_deleted(inputs)
});