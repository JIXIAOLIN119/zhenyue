/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Total_TokensInputs */

const zh_total_tokens = /** @type {(inputs: Total_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`总 Token`)
};

const en_total_tokens = /** @type {(inputs: Total_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total Tokens`)
};

/**
* | output |
* | --- |
* | "Total Tokens" |
*
* @param {Total_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const total_tokens = /** @type {((inputs?: Total_TokensInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Total_TokensInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_total_tokens(inputs)
	return en_total_tokens(inputs)
});