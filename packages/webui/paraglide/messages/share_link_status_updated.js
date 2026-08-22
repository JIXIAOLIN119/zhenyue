/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_Link_Status_UpdatedInputs */

const zh_share_link_status_updated = /** @type {(inputs: Share_Link_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享链接状态已更新`)
};

const en_share_link_status_updated = /** @type {(inputs: Share_Link_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share link status updated`)
};

/**
* | output |
* | --- |
* | "Share link status updated" |
*
* @param {Share_Link_Status_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_link_status_updated = /** @type {((inputs?: Share_Link_Status_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_Link_Status_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_link_status_updated(inputs)
	return en_share_link_status_updated(inputs)
});