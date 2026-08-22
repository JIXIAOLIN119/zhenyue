/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Token_Generated_SuccessfullyInputs */

const zh_api_token_generated_successfully = /** @type {(inputs: Api_Token_Generated_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 令牌生成成功`)
};

const en_api_token_generated_successfully = /** @type {(inputs: Api_Token_Generated_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API token generated successfully`)
};

/**
* | output |
* | --- |
* | "API token generated successfully" |
*
* @param {Api_Token_Generated_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const api_token_generated_successfully = /** @type {((inputs?: Api_Token_Generated_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Token_Generated_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_api_token_generated_successfully(inputs)
	return en_api_token_generated_successfully(inputs)
});