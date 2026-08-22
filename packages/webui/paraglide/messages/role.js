/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} RoleInputs */

const zh_role = /** @type {(inputs: RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`角色`)
};

const en_role = /** @type {(inputs: RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Role`)
};

/**
* | output |
* | --- |
* | "Role" |
*
* @param {RoleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const role = /** @type {((inputs?: RoleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<RoleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_role(inputs)
	return en_role(inputs)
});