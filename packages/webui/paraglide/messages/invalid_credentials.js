/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Invalid_CredentialsInputs */

const zh_invalid_credentials = /** @type {(inputs: Invalid_CredentialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`凭证无效`)
};

const en_invalid_credentials = /** @type {(inputs: Invalid_CredentialsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid credentials`)
};

/**
* | output |
* | --- |
* | "Invalid credentials" |
*
* @param {Invalid_CredentialsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const invalid_credentials = /** @type {((inputs?: Invalid_CredentialsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Invalid_CredentialsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_invalid_credentials(inputs)
	return en_invalid_credentials(inputs)
});