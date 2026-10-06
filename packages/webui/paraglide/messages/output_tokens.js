/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Output_TokensInputs */

const zh_output_tokens = /** @type {(inputs: Output_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输出 Token`)
};

const en_output_tokens = /** @type {(inputs: Output_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Output Tokens`)
};

/**
* | output |
* | --- |
* | "Output Tokens" |
*
* @param {Output_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const output_tokens = /** @type {((inputs?: Output_TokensInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Output_TokensInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_output_tokens(inputs)
	return en_output_tokens(inputs)
});