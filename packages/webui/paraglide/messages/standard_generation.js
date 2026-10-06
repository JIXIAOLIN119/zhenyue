/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Standard_GenerationInputs */

const zh_standard_generation = /** @type {(inputs: Standard_GenerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标准生成`)
};

const en_standard_generation = /** @type {(inputs: Standard_GenerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standard generation`)
};

/**
* | output |
* | --- |
* | "Standard generation" |
*
* @param {Standard_GenerationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const standard_generation = /** @type {((inputs?: Standard_GenerationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Standard_GenerationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_standard_generation(inputs)
	return en_standard_generation(inputs)
});