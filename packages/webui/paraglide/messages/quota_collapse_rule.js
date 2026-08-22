/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Collapse_RuleInputs */

const zh_quota_collapse_rule = /** @type {(inputs: Quota_Collapse_RuleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收起配额规则`)
};

const en_quota_collapse_rule = /** @type {(inputs: Quota_Collapse_RuleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collapse quota rule`)
};

/**
* | output |
* | --- |
* | "Collapse quota rule" |
*
* @param {Quota_Collapse_RuleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_collapse_rule = /** @type {((inputs?: Quota_Collapse_RuleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Collapse_RuleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_collapse_rule(inputs)
	return en_quota_collapse_rule(inputs)
});