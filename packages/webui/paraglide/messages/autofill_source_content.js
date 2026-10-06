/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Autofill_Source_ContentInputs */

const zh_autofill_source_content = /** @type {(inputs: Autofill_Source_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件内容`)
};

const en_autofill_source_content = /** @type {(inputs: Autofill_Source_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Content`)
};

/**
* | output |
* | --- |
* | "Content" |
*
* @param {Autofill_Source_ContentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source_content = /** @type {((inputs?: Autofill_Source_ContentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Autofill_Source_ContentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_autofill_source_content(inputs)
	return en_autofill_source_content(inputs)
});