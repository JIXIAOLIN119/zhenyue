/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Thinking_Level_DescriptionInputs */

const zh_thinking_level_description = /** @type {(inputs: Thinking_Level_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制复杂任务的推理深度。`)
};

const en_thinking_level_description = /** @type {(inputs: Thinking_Level_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Control the depth of reasoning for complex tasks.`)
};

/**
* | output |
* | --- |
* | "Control the depth of reasoning for complex tasks." |
*
* @param {Thinking_Level_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_level_description = /** @type {((inputs?: Thinking_Level_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Thinking_Level_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_thinking_level_description(inputs)
	return en_thinking_level_description(inputs)
});