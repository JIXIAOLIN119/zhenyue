/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Set_RoleInputs */

const zh_set_role = /** @type {(inputs: Set_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置角色`)
};

const en_set_role = /** @type {(inputs: Set_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set Role`)
};

/**
* | output |
* | --- |
* | "Set Role" |
*
* @param {Set_RoleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const set_role = /** @type {((inputs?: Set_RoleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Set_RoleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_set_role(inputs)
	return en_set_role(inputs)
});