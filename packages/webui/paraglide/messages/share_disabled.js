/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_DisabledInputs */

const zh_share_disabled = /** @type {(inputs: Share_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享已禁用`)
};

const en_share_disabled = /** @type {(inputs: Share_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share Disabled`)
};

/**
* | output |
* | --- |
* | "Share Disabled" |
*
* @param {Share_DisabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_disabled = /** @type {((inputs?: Share_DisabledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_DisabledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_disabled(inputs)
	return en_share_disabled(inputs)
});