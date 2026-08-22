/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Resource_Agent_Total_TokensInputs */

const zh_quota_resource_agent_total_tokens = /** @type {(inputs: Quota_Resource_Agent_Total_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Token 总量`)
};

const en_quota_resource_agent_total_tokens = /** @type {(inputs: Quota_Resource_Agent_Total_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Tokens`)
};

/**
* | output |
* | --- |
* | "AI Tokens" |
*
* @param {Quota_Resource_Agent_Total_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_resource_agent_total_tokens = /** @type {((inputs?: Quota_Resource_Agent_Total_TokensInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Resource_Agent_Total_TokensInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_resource_agent_total_tokens(inputs)
	return en_quota_resource_agent_total_tokens(inputs)
});