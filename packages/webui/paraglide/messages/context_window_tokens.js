/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Context_Window_TokensInputs */

const zh_context_window_tokens = /** @type {(inputs: Context_Window_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上下文窗口（令牌数）`)
};

const en_context_window_tokens = /** @type {(inputs: Context_Window_TokensInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Context Window (tokens)`)
};

/**
* | output |
* | --- |
* | "Context Window (tokens)" |
*
* @param {Context_Window_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const context_window_tokens = /** @type {((inputs?: Context_Window_TokensInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Context_Window_TokensInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_context_window_tokens(inputs)
	return en_context_window_tokens(inputs)
});