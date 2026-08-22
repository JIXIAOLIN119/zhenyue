/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Deep_ReasoningInputs */

const zh_deep_reasoning = /** @type {(inputs: Deep_ReasoningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`深度推理`)
};

const en_deep_reasoning = /** @type {(inputs: Deep_ReasoningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deep reasoning`)
};

/**
* | output |
* | --- |
* | "Deep reasoning" |
*
* @param {Deep_ReasoningInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const deep_reasoning = /** @type {((inputs?: Deep_ReasoningInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Deep_ReasoningInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_deep_reasoning(inputs)
	return en_deep_reasoning(inputs)
});