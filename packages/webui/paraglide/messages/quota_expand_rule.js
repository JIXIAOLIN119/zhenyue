/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Expand_RuleInputs */

const zh_quota_expand_rule = /** @type {(inputs: Quota_Expand_RuleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`展开配额规则`)
};

const en_quota_expand_rule = /** @type {(inputs: Quota_Expand_RuleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expand quota rule`)
};

/**
* | output |
* | --- |
* | "Expand quota rule" |
*
* @param {Quota_Expand_RuleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_expand_rule = /** @type {((inputs?: Quota_Expand_RuleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Expand_RuleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_expand_rule(inputs)
	return en_quota_expand_rule(inputs)
});