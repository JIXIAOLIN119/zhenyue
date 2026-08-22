/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Models_ConfiguredInputs */

const zh_no_models_configured = /** @type {(inputs: No_Models_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无已配置的模型`)
};

const en_no_models_configured = /** @type {(inputs: No_Models_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No models configured`)
};

/**
* | output |
* | --- |
* | "No models configured" |
*
* @param {No_Models_ConfiguredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_models_configured = /** @type {((inputs?: No_Models_ConfiguredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Models_ConfiguredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_models_configured(inputs)
	return en_no_models_configured(inputs)
});