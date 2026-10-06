/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_KeyInputs */

const zh_api_key = /** @type {(inputs: Api_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 密钥`)
};

const en_api_key = /** @type {(inputs: Api_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API Key`)
};

/**
* | output |
* | --- |
* | "API Key" |
*
* @param {Api_KeyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const api_key = /** @type {((inputs?: Api_KeyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_KeyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_api_key(inputs)
	return en_api_key(inputs)
});