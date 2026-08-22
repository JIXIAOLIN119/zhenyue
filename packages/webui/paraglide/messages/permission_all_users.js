/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Permission_All_UsersInputs */

const zh_permission_all_users = /** @type {(inputs: Permission_All_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有成员`)
};

const en_permission_all_users = /** @type {(inputs: Permission_All_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Users`)
};

/**
* | output |
* | --- |
* | "All Users" |
*
* @param {Permission_All_UsersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const permission_all_users = /** @type {((inputs?: Permission_All_UsersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Permission_All_UsersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_permission_all_users(inputs)
	return en_permission_all_users(inputs)
});