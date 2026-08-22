/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} TokenInputs */

const zh_token = /** @type {(inputs: TokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`令牌`)
};

const en_token = /** @type {(inputs: TokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token`)
};

/**
* | output |
* | --- |
* | "Token" |
*
* @param {TokenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const token = /** @type {((inputs?: TokenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<TokenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_token(inputs)
	return en_token(inputs)
});