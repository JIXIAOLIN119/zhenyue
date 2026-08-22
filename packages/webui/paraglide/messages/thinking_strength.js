/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Thinking_StrengthInputs */

const zh_thinking_strength = /** @type {(inputs: Thinking_StrengthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`思考强度`)
};

const en_thinking_strength = /** @type {(inputs: Thinking_StrengthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thinking Strength`)
};

/**
* | output |
* | --- |
* | "Thinking Strength" |
*
* @param {Thinking_StrengthInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_strength = /** @type {((inputs?: Thinking_StrengthInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Thinking_StrengthInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_thinking_strength(inputs)
	return en_thinking_strength(inputs)
});