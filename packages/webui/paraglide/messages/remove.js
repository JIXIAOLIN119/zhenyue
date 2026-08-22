/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} RemoveInputs */

const zh_remove = /** @type {(inputs: RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除`)
};

const en_remove = /** @type {(inputs: RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {RemoveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove = /** @type {((inputs?: RemoveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<RemoveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_remove(inputs)
	return en_remove(inputs)
});