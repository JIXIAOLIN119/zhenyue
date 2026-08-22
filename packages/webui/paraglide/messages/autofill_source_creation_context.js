/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Autofill_Source_Creation_ContextInputs */

const zh_autofill_source_creation_context = /** @type {(inputs: Autofill_Source_Creation_ContextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建上下文`)
};

const en_autofill_source_creation_context = /** @type {(inputs: Autofill_Source_Creation_ContextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creation Context`)
};

/**
* | output |
* | --- |
* | "Creation Context" |
*
* @param {Autofill_Source_Creation_ContextInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source_creation_context = /** @type {((inputs?: Autofill_Source_Creation_ContextInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Autofill_Source_Creation_ContextInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_autofill_source_creation_context(inputs)
	return en_autofill_source_creation_context(inputs)
});