/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Thinking_MediumInputs */

const zh_thinking_medium = /** @type {(inputs: Thinking_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`中`)
};

const en_thinking_medium = /** @type {(inputs: Thinking_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medium`)
};

/**
* | output |
* | --- |
* | "Medium" |
*
* @param {Thinking_MediumInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_medium = /** @type {((inputs?: Thinking_MediumInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Thinking_MediumInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_thinking_medium(inputs)
	return en_thinking_medium(inputs)
});