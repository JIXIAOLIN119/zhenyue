/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Autofill_SourceInputs */

const zh_autofill_source = /** @type {(inputs: Autofill_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动填充来源`)
};

const en_autofill_source = /** @type {(inputs: Autofill_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autofill Source`)
};

/**
* | output |
* | --- |
* | "Autofill Source" |
*
* @param {Autofill_SourceInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source = /** @type {((inputs?: Autofill_SourceInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Autofill_SourceInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_autofill_source(inputs)
	return en_autofill_source(inputs)
});