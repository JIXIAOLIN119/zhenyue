/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Max_Output_TokensInputs */

const zh_max_output_tokens = /** @type {(inputs: Max_Output_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最大输出令牌数`)
};

const en_max_output_tokens = /** @type {(inputs: Max_Output_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Max Output Tokens`)
};

/**
* | output |
* | --- |
* | "Max Output Tokens" |
*
* @param {Max_Output_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const max_output_tokens = /** @type {((inputs?: Max_Output_TokensInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Max_Output_TokensInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_max_output_tokens(inputs)
	return en_max_output_tokens(inputs)
});