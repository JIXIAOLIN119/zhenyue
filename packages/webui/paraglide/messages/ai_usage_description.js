/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ai_Usage_DescriptionInputs */

const zh_ai_usage_description = /** @type {(inputs: Ai_Usage_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看并监控团队及成员的 AI Token 消耗与预估费用。`)
};

const en_ai_usage_description = /** @type {(inputs: Ai_Usage_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monitor AI token consumption and estimated costs for your team and members.`)
};

/**
* | output |
* | --- |
* | "Monitor AI token consumption and estimated costs for your team and members." |
*
* @param {Ai_Usage_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai_usage_description = /** @type {((inputs?: Ai_Usage_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ai_Usage_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_ai_usage_description(inputs)
	return en_ai_usage_description(inputs)
});