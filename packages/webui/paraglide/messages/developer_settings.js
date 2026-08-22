/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Developer_SettingsInputs */

const zh_developer_settings = /** @type {(inputs: Developer_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开发者设置`)
};

const en_developer_settings = /** @type {(inputs: Developer_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Developer Settings`)
};

/**
* | output |
* | --- |
* | "Developer Settings" |
*
* @param {Developer_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const developer_settings = /** @type {((inputs?: Developer_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Developer_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_developer_settings(inputs)
	return en_developer_settings(inputs)
});