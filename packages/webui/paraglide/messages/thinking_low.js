/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Thinking_LowInputs */

const zh_thinking_low = /** @type {(inputs: Thinking_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`低`)
};

const en_thinking_low = /** @type {(inputs: Thinking_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Low`)
};

/**
* | output |
* | --- |
* | "Low" |
*
* @param {Thinking_LowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_low = /** @type {((inputs?: Thinking_LowInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Thinking_LowInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_thinking_low(inputs)
	return en_thinking_low(inputs)
});