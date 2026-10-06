/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Save_ConfigurationInputs */

const zh_save_configuration = /** @type {(inputs: Save_ConfigurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存配置`)
};

const en_save_configuration = /** @type {(inputs: Save_ConfigurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save Configuration`)
};

/**
* | output |
* | --- |
* | "Save Configuration" |
*
* @param {Save_ConfigurationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const save_configuration = /** @type {((inputs?: Save_ConfigurationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Save_ConfigurationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_save_configuration(inputs)
	return en_save_configuration(inputs)
});