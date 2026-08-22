/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Autofill_Source_None_ExampleInputs */

const zh_autofill_source_none_example = /** @type {(inputs: Autofill_Source_None_ExampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`示例：内部标签、手动备注、状态标记。`)
};

const en_autofill_source_none_example = /** @type {(inputs: Autofill_Source_None_ExampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Example: Internal tags, manual notes, status tracking flags.`)
};

/**
* | output |
* | --- |
* | "Example: Internal tags, manual notes, status tracking flags." |
*
* @param {Autofill_Source_None_ExampleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source_none_example = /** @type {((inputs?: Autofill_Source_None_ExampleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Autofill_Source_None_ExampleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_autofill_source_none_example(inputs)
	return en_autofill_source_none_example(inputs)
});