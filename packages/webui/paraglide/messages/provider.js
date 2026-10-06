/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ProviderInputs */

const zh_provider = /** @type {(inputs: ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提供商`)
};

const en_provider = /** @type {(inputs: ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provider`)
};

/**
* | output |
* | --- |
* | "Provider" |
*
* @param {ProviderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider = /** @type {((inputs?: ProviderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ProviderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_provider(inputs)
	return en_provider(inputs)
});