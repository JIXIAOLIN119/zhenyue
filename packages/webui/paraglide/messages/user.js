/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} UserInputs */

const zh_user = /** @type {(inputs: UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户`)
};

const en_user = /** @type {(inputs: UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User`)
};

/**
* | output |
* | --- |
* | "User" |
*
* @param {UserInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const user = /** @type {((inputs?: UserInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<UserInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_user(inputs)
	return en_user(inputs)
});