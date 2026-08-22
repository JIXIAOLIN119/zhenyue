/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Permission_Owner_OnlyInputs */

const zh_permission_owner_only = /** @type {(inputs: Permission_Owner_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅管理员`)
};

const en_permission_owner_only = /** @type {(inputs: Permission_Owner_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Owner Only`)
};

/**
* | output |
* | --- |
* | "Owner Only" |
*
* @param {Permission_Owner_OnlyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const permission_owner_only = /** @type {((inputs?: Permission_Owner_OnlyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Permission_Owner_OnlyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_permission_owner_only(inputs)
	return en_permission_owner_only(inputs)
});