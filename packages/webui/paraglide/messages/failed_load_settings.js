/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Load_SettingsInputs */

const zh_failed_load_settings = /** @type {(inputs: Failed_Load_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载设置失败。`)
};

const en_failed_load_settings = /** @type {(inputs: Failed_Load_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to load settings.`)
};

/**
* | output |
* | --- |
* | "Failed to load settings." |
*
* @param {Failed_Load_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_load_settings = /** @type {((inputs?: Failed_Load_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Load_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_load_settings(inputs)
	return en_failed_load_settings(inputs)
});