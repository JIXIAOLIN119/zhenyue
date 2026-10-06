/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Preset_Avatar_OptionInputs */

const zh_preset_avatar_option = /** @type {(inputs: Preset_Avatar_OptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预设头像选项`)
};

const en_preset_avatar_option = /** @type {(inputs: Preset_Avatar_OptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preset Avatar Option`)
};

/**
* | output |
* | --- |
* | "Preset Avatar Option" |
*
* @param {Preset_Avatar_OptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const preset_avatar_option = /** @type {((inputs?: Preset_Avatar_OptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Preset_Avatar_OptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_preset_avatar_option(inputs)
	return en_preset_avatar_option(inputs)
});