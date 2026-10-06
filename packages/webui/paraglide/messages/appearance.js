/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} AppearanceInputs */

const zh_appearance = /** @type {(inputs: AppearanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`外观`)
};

const en_appearance = /** @type {(inputs: AppearanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appearance`)
};

/**
* | output |
* | --- |
* | "Appearance" |
*
* @param {AppearanceInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const appearance = /** @type {((inputs?: AppearanceInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<AppearanceInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_appearance(inputs)
	return en_appearance(inputs)
});