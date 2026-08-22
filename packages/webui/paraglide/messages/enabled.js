/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} EnabledInputs */

const zh_enabled = /** @type {(inputs: EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已启用`)
};

const en_enabled = /** @type {(inputs: EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enabled`)
};

/**
* | output |
* | --- |
* | "Enabled" |
*
* @param {EnabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enabled = /** @type {((inputs?: EnabledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<EnabledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_enabled(inputs)
	return en_enabled(inputs)
});