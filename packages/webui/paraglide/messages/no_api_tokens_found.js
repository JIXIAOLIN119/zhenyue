/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Api_Tokens_FoundInputs */

const zh_no_api_tokens_found = /** @type {(inputs: No_Api_Tokens_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到 API 令牌。请在上方生成一个以开始使用。`)
};

const en_no_api_tokens_found = /** @type {(inputs: No_Api_Tokens_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No API tokens found. Generate one above to get started.`)
};

/**
* | output |
* | --- |
* | "No API tokens found. Generate one above to get started." |
*
* @param {No_Api_Tokens_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_api_tokens_found = /** @type {((inputs?: No_Api_Tokens_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Api_Tokens_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_api_tokens_found(inputs)
	return en_no_api_tokens_found(inputs)
});