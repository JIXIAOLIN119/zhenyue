/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sandbox_DescriptionInputs */

const zh_sandbox_description = /** @type {(inputs: Sandbox_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置 AI 智能体的安全和网络限制。`)
};

const en_sandbox_description = /** @type {(inputs: Sandbox_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure security and network restrictions for the AI agent.`)
};

/**
* | output |
* | --- |
* | "Configure security and network restrictions for the AI agent." |
*
* @param {Sandbox_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sandbox_description = /** @type {((inputs?: Sandbox_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sandbox_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sandbox_description(inputs)
	return en_sandbox_description(inputs)
});