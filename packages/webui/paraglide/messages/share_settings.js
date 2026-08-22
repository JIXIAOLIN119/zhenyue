/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Share_SettingsInputs */

const zh_share_settings = /** @type {(inputs: Share_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享设置`)
};

const en_share_settings = /** @type {(inputs: Share_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share Settings`)
};

/**
* | output |
* | --- |
* | "Share Settings" |
*
* @param {Share_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_settings = /** @type {((inputs?: Share_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Share_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share_settings(inputs)
	return en_share_settings(inputs)
});