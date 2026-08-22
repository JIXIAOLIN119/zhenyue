/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Remove_From_StackInputs */

const zh_remove_from_stack = /** @type {(inputs: Remove_From_StackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从版本堆栈中移除`)
};

const en_remove_from_stack = /** @type {(inputs: Remove_From_StackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove from stack`)
};

/**
* | output |
* | --- |
* | "Remove from stack" |
*
* @param {Remove_From_StackInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove_from_stack = /** @type {((inputs?: Remove_From_StackInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Remove_From_StackInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_remove_from_stack(inputs)
	return en_remove_from_stack(inputs)
});