/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Token_NameInputs */

const zh_token_name = /** @type {(inputs: Token_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`令牌名称`)
};

const en_token_name = /** @type {(inputs: Token_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token Name`)
};

/**
* | output |
* | --- |
* | "Token Name" |
*
* @param {Token_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const token_name = /** @type {((inputs?: Token_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Token_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_token_name(inputs)
	return en_token_name(inputs)
});