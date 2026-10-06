/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Scope_RoleInputs */

const zh_quota_scope_role = /** @type {(inputs: Quota_Scope_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按角色`)
};

const en_quota_scope_role = /** @type {(inputs: Quota_Scope_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Role-based`)
};

/**
* | output |
* | --- |
* | "Role-based" |
*
* @param {Quota_Scope_RoleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_role = /** @type {((inputs?: Quota_Scope_RoleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Scope_RoleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_scope_role(inputs)
	return en_quota_scope_role(inputs)
});