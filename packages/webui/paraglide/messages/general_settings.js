/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} General_SettingsInputs */

const zh_general_settings = /** @type {(inputs: General_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通用设置`)
};

const en_general_settings = /** @type {(inputs: General_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`General Settings`)
};

/**
* | output |
* | --- |
* | "General Settings" |
*
* @param {General_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const general_settings = /** @type {((inputs?: General_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<General_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_general_settings(inputs)
	return en_general_settings(inputs)
});