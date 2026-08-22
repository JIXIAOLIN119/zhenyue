/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Scope_TeamInputs */

const zh_quota_scope_team = /** @type {(inputs: Quota_Scope_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整个团队`)
};

const en_quota_scope_team = /** @type {(inputs: Quota_Scope_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entire Team`)
};

/**
* | output |
* | --- |
* | "Entire Team" |
*
* @param {Quota_Scope_TeamInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_team = /** @type {((inputs?: Quota_Scope_TeamInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Scope_TeamInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_scope_team(inputs)
	return en_quota_scope_team(inputs)
});