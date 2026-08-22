/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cache_Read_TokensInputs */

const zh_cache_read_tokens = /** @type {(inputs: Cache_Read_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缓存读取 Token`)
};

const en_cache_read_tokens = /** @type {(inputs: Cache_Read_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cache Read Tokens`)
};

/**
* | output |
* | --- |
* | "Cache Read Tokens" |
*
* @param {Cache_Read_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const cache_read_tokens = /** @type {((inputs?: Cache_Read_TokensInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cache_Read_TokensInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_cache_read_tokens(inputs)
	return en_cache_read_tokens(inputs)
});