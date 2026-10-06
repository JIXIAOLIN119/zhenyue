/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Configure_Agent_DescriptionInputs */

const zh_configure_agent_description = /** @type {(inputs: Configure_Agent_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置 AI 智能体的个性和功能。`)
};

const en_configure_agent_description = /** @type {(inputs: Configure_Agent_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure your AI agent's personality and capabilities.`)
};

/**
* | output |
* | --- |
* | "Configure your AI agent's personality and capabilities." |
*
* @param {Configure_Agent_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const configure_agent_description = /** @type {((inputs?: Configure_Agent_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Configure_Agent_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_configure_agent_description(inputs)
	return en_configure_agent_description(inputs)
});