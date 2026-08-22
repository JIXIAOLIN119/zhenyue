/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Models_ConfigurationInputs */

const zh_models_configuration = /** @type {(inputs: Models_ConfigurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模型配置`)
};

const en_models_configuration = /** @type {(inputs: Models_ConfigurationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Models Configuration`)
};

/**
* | output |
* | --- |
* | "Models Configuration" |
*
* @param {Models_ConfigurationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const models_configuration = /** @type {((inputs?: Models_ConfigurationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Models_ConfigurationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_models_configuration(inputs)
	return en_models_configuration(inputs)
});