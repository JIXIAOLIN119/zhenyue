/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Autofill_Source_Content_ExampleInputs */

const zh_autofill_source_content_example = /** @type {(inputs: Autofill_Source_Content_ExampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`示例：图片类别、主色调、文档摘要、自动识别语言。`)
};

const en_autofill_source_content_example = /** @type {(inputs: Autofill_Source_Content_ExampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Example: Image subject category, visual color palette, document summary, auto-detected language.`)
};

/**
* | output |
* | --- |
* | "Example: Image subject category, visual color palette, document summary, auto-detected language." |
*
* @param {Autofill_Source_Content_ExampleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source_content_example = /** @type {((inputs?: Autofill_Source_Content_ExampleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Autofill_Source_Content_ExampleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_autofill_source_content_example(inputs)
	return en_autofill_source_content_example(inputs)
});