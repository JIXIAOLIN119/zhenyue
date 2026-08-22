/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} GeneralInputs */

const zh_general = /** @type {(inputs: GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通用`)
};

const en_general = /** @type {(inputs: GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`General`)
};

/**
* | output |
* | --- |
* | "General" |
*
* @param {GeneralInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const general = /** @type {((inputs?: GeneralInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<GeneralInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_general(inputs)
	return en_general(inputs)
});