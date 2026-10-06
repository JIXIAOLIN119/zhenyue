/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} GenerateInputs */

const zh_generate = /** @type {(inputs: GenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成`)
};

const en_generate = /** @type {(inputs: GenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate`)
};

/**
* | output |
* | --- |
* | "Generate" |
*
* @param {GenerateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const generate = /** @type {((inputs?: GenerateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<GenerateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_generate(inputs)
	return en_generate(inputs)
});