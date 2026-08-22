/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Resource_Agent_CostInputs */

const zh_quota_resource_agent_cost = /** @type {(inputs: Quota_Resource_Agent_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 费用 ($)`)
};

const en_quota_resource_agent_cost = /** @type {(inputs: Quota_Resource_Agent_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Cost ($)`)
};

/**
* | output |
* | --- |
* | "AI Cost ($)" |
*
* @param {Quota_Resource_Agent_CostInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_resource_agent_cost = /** @type {((inputs?: Quota_Resource_Agent_CostInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Resource_Agent_CostInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_resource_agent_cost(inputs)
	return en_quota_resource_agent_cost(inputs)
});