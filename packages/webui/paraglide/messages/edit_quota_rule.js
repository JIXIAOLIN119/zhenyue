/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Edit_Quota_RuleInputs */

const zh_edit_quota_rule = /** @type {(inputs: Edit_Quota_RuleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑配额规则`)
};

const en_edit_quota_rule = /** @type {(inputs: Edit_Quota_RuleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit Quota Rule`)
};

/**
* | output |
* | --- |
* | "Edit Quota Rule" |
*
* @param {Edit_Quota_RuleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const edit_quota_rule = /** @type {((inputs?: Edit_Quota_RuleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Edit_Quota_RuleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_edit_quota_rule(inputs)
	return en_edit_quota_rule(inputs)
});