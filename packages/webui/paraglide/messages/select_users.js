/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_UsersInputs */

const zh_select_users = /** @type {(inputs: Select_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择用户`)
};

const en_select_users = /** @type {(inputs: Select_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select Users`)
};

/**
* | output |
* | --- |
* | "Select Users" |
*
* @param {Select_UsersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_users = /** @type {((inputs?: Select_UsersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_UsersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_users(inputs)
	return en_select_users(inputs)
});