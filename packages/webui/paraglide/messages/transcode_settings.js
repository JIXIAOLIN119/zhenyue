/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Transcode_SettingsInputs */

const zh_transcode_settings = /** @type {(inputs: Transcode_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`转码设置`)
};

const en_transcode_settings = /** @type {(inputs: Transcode_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transcode Settings`)
};

/**
* | output |
* | --- |
* | "Transcode Settings" |
*
* @param {Transcode_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const transcode_settings = /** @type {((inputs?: Transcode_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Transcode_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_transcode_settings(inputs)
	return en_transcode_settings(inputs)
});