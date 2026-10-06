/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Autofill_Source_Creation_Context_ExampleInputs */

const zh_autofill_source_creation_context_example = /** @type {(inputs: Autofill_Source_Creation_Context_ExampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`示例：生成 Prompt、AI 模型名称、LLM 供应商、采样种子参数。`)
};

const en_autofill_source_creation_context_example = /** @type {(inputs: Autofill_Source_Creation_Context_ExampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Example: Generation prompt, AI model name, LLM provider, sampler seed parameters.`)
};

/**
* | output |
* | --- |
* | "Example: Generation prompt, AI model name, LLM provider, sampler seed parameters." |
*
* @param {Autofill_Source_Creation_Context_ExampleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source_creation_context_example = /** @type {((inputs?: Autofill_Source_Creation_Context_ExampleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Autofill_Source_Creation_Context_ExampleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_autofill_source_creation_context_example(inputs)
	return en_autofill_source_creation_context_example(inputs)
});