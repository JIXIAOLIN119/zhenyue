/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} RestoredInputs */

const zh_restored = /** @type {(inputs: RestoredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已恢复`)
};

const en_restored = /** @type {(inputs: RestoredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restored`)
};

/**
* | output |
* | --- |
* | "Restored" |
*
* @param {RestoredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const restored = /** @type {((inputs?: RestoredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<RestoredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_restored(inputs)
	return en_restored(inputs)
});