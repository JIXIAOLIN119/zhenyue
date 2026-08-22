/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Thinking_HighInputs */

const zh_thinking_high = /** @type {(inputs: Thinking_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`高`)
};

const en_thinking_high = /** @type {(inputs: Thinking_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`High`)
};

/**
* | output |
* | --- |
* | "High" |
*
* @param {Thinking_HighInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_high = /** @type {((inputs?: Thinking_HighInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Thinking_HighInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_thinking_high(inputs)
	return en_thinking_high(inputs)
});