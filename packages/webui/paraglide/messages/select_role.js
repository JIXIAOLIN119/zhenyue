/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_RoleInputs */

const zh_select_role = /** @type {(inputs: Select_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择角色`)
};

const en_select_role = /** @type {(inputs: Select_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select Role`)
};

/**
* | output |
* | --- |
* | "Select Role" |
*
* @param {Select_RoleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_role = /** @type {((inputs?: Select_RoleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_RoleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_role(inputs)
	return en_select_role(inputs)
});