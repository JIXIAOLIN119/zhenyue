/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Generate_TokenInputs */

const zh_failed_to_generate_token = /** @type {(inputs: Failed_To_Generate_TokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成令牌失败`)
};

const en_failed_to_generate_token = /** @type {(inputs: Failed_To_Generate_TokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to generate token`)
};

/**
* | output |
* | --- |
* | "Failed to generate token" |
*
* @param {Failed_To_Generate_TokenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_generate_token = /** @type {((inputs?: Failed_To_Generate_TokenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Generate_TokenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_generate_token(inputs)
	return en_failed_to_generate_token(inputs)
});