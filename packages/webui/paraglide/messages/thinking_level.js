/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Thinking_LevelInputs */

const zh_thinking_level = /** @type {(inputs: Thinking_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`思考级别`)
};

const en_thinking_level = /** @type {(inputs: Thinking_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thinking Level`)
};

/**
* | output |
* | --- |
* | "Thinking Level" |
*
* @param {Thinking_LevelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_level = /** @type {((inputs?: Thinking_LevelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Thinking_LevelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_thinking_level(inputs)
	return en_thinking_level(inputs)
});