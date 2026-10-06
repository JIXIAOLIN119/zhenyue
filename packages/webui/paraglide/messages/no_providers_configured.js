/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Providers_ConfiguredInputs */

const zh_no_providers_configured = /** @type {(inputs: No_Providers_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无已配置的提供商`)
};

const en_no_providers_configured = /** @type {(inputs: No_Providers_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No Providers Configured`)
};

/**
* | output |
* | --- |
* | "No Providers Configured" |
*
* @param {No_Providers_ConfiguredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_providers_configured = /** @type {((inputs?: No_Providers_ConfiguredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Providers_ConfiguredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_providers_configured(inputs)
	return en_no_providers_configured(inputs)
});