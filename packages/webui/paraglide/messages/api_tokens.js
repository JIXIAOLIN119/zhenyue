/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_TokensInputs */

const zh_api_tokens = /** @type {(inputs: Api_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 令牌`)
};

const en_api_tokens = /** @type {(inputs: Api_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API Tokens`)
};

/**
* | output |
* | --- |
* | "API Tokens" |
*
* @param {Api_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const api_tokens = /** @type {((inputs?: Api_TokensInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_TokensInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_api_tokens(inputs)
	return en_api_tokens(inputs)
});