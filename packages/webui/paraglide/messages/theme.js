/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ThemeInputs */

const zh_theme = /** @type {(inputs: ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主题`)
};

const en_theme = /** @type {(inputs: ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Theme`)
};

/**
* | output |
* | --- |
* | "Theme" |
*
* @param {ThemeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const theme = /** @type {((inputs?: ThemeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ThemeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_theme(inputs)
	return en_theme(inputs)
});