/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Token_Name_PlaceholderInputs */

const zh_token_name_placeholder = /** @type {(inputs: Token_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：我的 CLI 令牌`)
};

const en_token_name_placeholder = /** @type {(inputs: Token_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. My CLI token`)
};

/**
* | output |
* | --- |
* | "e.g. My CLI token" |
*
* @param {Token_Name_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const token_name_placeholder = /** @type {((inputs?: Token_Name_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Token_Name_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_token_name_placeholder(inputs)
	return en_token_name_placeholder(inputs)
});