/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Provider_Created_SuccessfullyInputs */

const zh_provider_created_successfully = /** @type {(inputs: Provider_Created_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提供商创建成功`)
};

const en_provider_created_successfully = /** @type {(inputs: Provider_Created_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provider created successfully`)
};

/**
* | output |
* | --- |
* | "Provider created successfully" |
*
* @param {Provider_Created_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_created_successfully = /** @type {((inputs?: Provider_Created_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Provider_Created_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_provider_created_successfully(inputs)
	return en_provider_created_successfully(inputs)
});