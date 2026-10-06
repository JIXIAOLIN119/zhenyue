/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signup_SubtitleInputs */

const zh_signup_subtitle = /** @type {(inputs: Signup_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始构建和整理您的空间。`)
};

const en_signup_subtitle = /** @type {(inputs: Signup_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start building and organizing your space.`)
};

/**
* | output |
* | --- |
* | "Start building and organizing your space." |
*
* @param {Signup_SubtitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const signup_subtitle = /** @type {((inputs?: Signup_SubtitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signup_SubtitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_signup_subtitle(inputs)
	return en_signup_subtitle(inputs)
});