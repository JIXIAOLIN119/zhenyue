/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Reasoning_SupportInputs */

const zh_reasoning_support = /** @type {(inputs: Reasoning_SupportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`推理支持`)
};

const en_reasoning_support = /** @type {(inputs: Reasoning_SupportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reasoning Support`)
};

/**
* | output |
* | --- |
* | "Reasoning Support" |
*
* @param {Reasoning_SupportInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const reasoning_support = /** @type {((inputs?: Reasoning_SupportInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Reasoning_SupportInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_reasoning_support(inputs)
	return en_reasoning_support(inputs)
});