/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ai_UsageInputs */

const zh_ai_usage = /** @type {(inputs: Ai_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Token 用量`)
};

const en_ai_usage = /** @type {(inputs: Ai_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Token Usage`)
};

/**
* | output |
* | --- |
* | "AI Token Usage" |
*
* @param {Ai_UsageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai_usage = /** @type {((inputs?: Ai_UsageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ai_UsageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_ai_usage(inputs)
	return en_ai_usage(inputs)
});