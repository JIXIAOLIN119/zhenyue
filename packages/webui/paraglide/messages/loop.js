/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} LoopInputs */

const zh_loop = /** @type {(inputs: LoopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`循环`)
};

const en_loop = /** @type {(inputs: LoopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loop`)
};

/**
* | output |
* | --- |
* | "Loop" |
*
* @param {LoopInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const loop = /** @type {((inputs?: LoopInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<LoopInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_loop(inputs)
	return en_loop(inputs)
});