/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Token_Revoked_SuccessfullyInputs */

const zh_api_token_revoked_successfully = /** @type {(inputs: Api_Token_Revoked_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 令牌已成功撤销`)
};

const en_api_token_revoked_successfully = /** @type {(inputs: Api_Token_Revoked_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API token revoked successfully`)
};

/**
* | output |
* | --- |
* | "API token revoked successfully" |
*
* @param {Api_Token_Revoked_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const api_token_revoked_successfully = /** @type {((inputs?: Api_Token_Revoked_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Token_Revoked_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_api_token_revoked_successfully(inputs)
	return en_api_token_revoked_successfully(inputs)
});