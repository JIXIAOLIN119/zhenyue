/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quick_ReasoningInputs */

const zh_quick_reasoning = /** @type {(inputs: Quick_ReasoningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`快速推理`)
};

const en_quick_reasoning = /** @type {(inputs: Quick_ReasoningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quick reasoning`)
};

/**
* | output |
* | --- |
* | "Quick reasoning" |
*
* @param {Quick_ReasoningInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quick_reasoning = /** @type {((inputs?: Quick_ReasoningInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quick_ReasoningInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quick_reasoning(inputs)
	return en_quick_reasoning(inputs)
});