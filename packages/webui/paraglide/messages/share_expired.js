/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_ExpiredInputs */

const zh_share_expired = /** @type {(inputs: Share_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享已过期`)
};

const en_share_expired = /** @type {(inputs: Share_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share Expired`)
};

/**
* | output |
* | --- |
* | "Share Expired" |
*
* @param {Share_ExpiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_expired = /** @type {((inputs?: Share_ExpiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_ExpiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_expired(inputs)
	return en_share_expired(inputs)
});