/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unknown_UserInputs */

const zh_unknown_user = /** @type {(inputs: Unknown_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知用户`)
};

const en_unknown_user = /** @type {(inputs: Unknown_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown User`)
};

/**
* | output |
* | --- |
* | "Unknown User" |
*
* @param {Unknown_UserInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unknown_user = /** @type {((inputs?: Unknown_UserInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unknown_UserInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_unknown_user(inputs)
	return en_unknown_user(inputs)
});