/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Input_TokensInputs */

const zh_input_tokens = /** @type {(inputs: Input_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入 Token`)
};

const en_input_tokens = /** @type {(inputs: Input_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Input Tokens`)
};

/**
* | output |
* | --- |
* | "Input Tokens" |
*
* @param {Input_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const input_tokens = /** @type {((inputs?: Input_TokensInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Input_TokensInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_input_tokens(inputs)
	return en_input_tokens(inputs)
});