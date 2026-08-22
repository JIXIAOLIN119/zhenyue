/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Role_Shared_PoolInputs */

const zh_quota_role_shared_pool = /** @type {(inputs: Quota_Role_Shared_PoolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`角色共享配额池`)
};

const en_quota_role_shared_pool = /** @type {(inputs: Quota_Role_Shared_PoolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Role Shared Pool`)
};

/**
* | output |
* | --- |
* | "Role Shared Pool" |
*
* @param {Quota_Role_Shared_PoolInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_role_shared_pool = /** @type {((inputs?: Quota_Role_Shared_PoolInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Role_Shared_PoolInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_role_shared_pool(inputs)
	return en_quota_role_shared_pool(inputs)
});