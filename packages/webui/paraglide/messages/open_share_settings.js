/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Open_Share_SettingsInputs */

const zh_open_share_settings = /** @type {(inputs: Open_Share_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开分享设置`)
};

const en_open_share_settings = /** @type {(inputs: Open_Share_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open share settings`)
};

/**
* | output |
* | --- |
* | "Open share settings" |
*
* @param {Open_Share_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const open_share_settings = /** @type {((inputs?: Open_Share_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Open_Share_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_open_share_settings(inputs)
	return en_open_share_settings(inputs)
});