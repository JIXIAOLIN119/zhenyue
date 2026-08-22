/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Password_Min_PlaceholderInputs */

const zh_password_min_placeholder = /** @type {(inputs: Password_Min_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`至少 3 个字符`)
};

const en_password_min_placeholder = /** @type {(inputs: Password_Min_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`At least 3 characters`)
};

/**
* | output |
* | --- |
* | "At least 3 characters" |
*
* @param {Password_Min_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const password_min_placeholder = /** @type {((inputs?: Password_Min_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Password_Min_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_password_min_placeholder(inputs)
	return en_password_min_placeholder(inputs)
});