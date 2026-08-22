/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} RestoreInputs */

const zh_restore = /** @type {(inputs: RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复`)
};

const en_restore = /** @type {(inputs: RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restore`)
};

/**
* | output |
* | --- |
* | "Restore" |
*
* @param {RestoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const restore = /** @type {((inputs?: RestoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<RestoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_restore(inputs)
	return en_restore(inputs)
});