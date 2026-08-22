/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ai_SettingsInputs */

const zh_ai_settings = /** @type {(inputs: Ai_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 设置`)
};

const en_ai_settings = /** @type {(inputs: Ai_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Settings`)
};

/**
* | output |
* | --- |
* | "AI Settings" |
*
* @param {Ai_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai_settings = /** @type {((inputs?: Ai_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ai_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_ai_settings(inputs)
	return en_ai_settings(inputs)
});