/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Role_UserInputs */

const zh_role_user = /** @type {(inputs: Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户`)
};

const en_role_user = /** @type {(inputs: Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User`)
};

/**
* | output |
* | --- |
* | "User" |
*
* @param {Role_UserInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const role_user = /** @type {((inputs?: Role_UserInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Role_UserInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_role_user(inputs)
	return en_role_user(inputs)
});