/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Scope_Team_DescriptionInputs */

const zh_quota_scope_team_description = /** @type {(inputs: Quota_Scope_Team_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对整个团队累计生效`)
};

const en_quota_scope_team_description = /** @type {(inputs: Quota_Scope_Team_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Applies collectively to the entire team`)
};

/**
* | output |
* | --- |
* | "Applies collectively to the entire team" |
*
* @param {Quota_Scope_Team_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_team_description = /** @type {((inputs?: Quota_Scope_Team_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Scope_Team_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_scope_team_description(inputs)
	return en_quota_scope_team_description(inputs)
});