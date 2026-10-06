/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Remove_From_ContextInputs */

const zh_remove_from_context = /** @type {(inputs: Remove_From_ContextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从上下文中移除`)
};

const en_remove_from_context = /** @type {(inputs: Remove_From_ContextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove from context`)
};

/**
* | output |
* | --- |
* | "Remove from context" |
*
* @param {Remove_From_ContextInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove_from_context = /** @type {((inputs?: Remove_From_ContextInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Remove_From_ContextInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_remove_from_context(inputs)
	return en_remove_from_context(inputs)
});