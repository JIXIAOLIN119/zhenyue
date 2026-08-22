/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Create_Quota_RuleInputs */

const zh_create_quota_rule = /** @type {(inputs: Create_Quota_RuleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建配额规则`)
};

const en_create_quota_rule = /** @type {(inputs: Create_Quota_RuleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create Quota Rule`)
};

/**
* | output |
* | --- |
* | "Create Quota Rule" |
*
* @param {Create_Quota_RuleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_quota_rule = /** @type {((inputs?: Create_Quota_RuleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Create_Quota_RuleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_create_quota_rule(inputs)
	return en_create_quota_rule(inputs)
});