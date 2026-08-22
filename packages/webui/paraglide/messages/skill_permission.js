/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Skill_PermissionInputs */

const zh_skill_permission = /** @type {(inputs: Skill_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`权限`)
};

const en_skill_permission = /** @type {(inputs: Skill_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permission`)
};

/**
* | output |
* | --- |
* | "Permission" |
*
* @param {Skill_PermissionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const skill_permission = /** @type {((inputs?: Skill_PermissionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Skill_PermissionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_skill_permission(inputs)
	return en_skill_permission(inputs)
});