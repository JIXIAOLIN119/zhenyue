/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Quotas_DescriptionInputs */

const zh_no_quotas_description = /** @type {(inputs: No_Quotas_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为 AI Token、费用、MCP 服务和智能体工具调用设置限制，以便管理团队的使用情况。`)
};

const en_no_quotas_description = /** @type {(inputs: No_Quotas_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set limits on AI tokens, costs, skill executions, and agent tool calls to manage team usage.`)
};

/**
* | output |
* | --- |
* | "Set limits on AI tokens, costs, skill executions, and agent tool calls to manage team usage." |
*
* @param {No_Quotas_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_quotas_description = /** @type {((inputs?: No_Quotas_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Quotas_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_quotas_description(inputs)
	return en_no_quotas_description(inputs)
});