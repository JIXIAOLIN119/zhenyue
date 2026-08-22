/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Provider_Is_RequiredInputs */

const zh_provider_is_required = /** @type {(inputs: Provider_Is_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提供商为必填项`)
};

const en_provider_is_required = /** @type {(inputs: Provider_Is_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provider is required`)
};

/**
* | output |
* | --- |
* | "Provider is required" |
*
* @param {Provider_Is_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_is_required = /** @type {((inputs?: Provider_Is_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Provider_Is_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_provider_is_required(inputs)
	return en_provider_is_required(inputs)
});