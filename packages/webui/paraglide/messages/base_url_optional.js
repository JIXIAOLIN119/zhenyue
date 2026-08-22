/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Base_Url_OptionalInputs */

const zh_base_url_optional = /** @type {(inputs: Base_Url_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`基础 URL（可选）`)
};

const en_base_url_optional = /** @type {(inputs: Base_Url_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base URL (Optional)`)
};

/**
* | output |
* | --- |
* | "Base URL (Optional)" |
*
* @param {Base_Url_OptionalInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const base_url_optional = /** @type {((inputs?: Base_Url_OptionalInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Base_Url_OptionalInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_base_url_optional(inputs)
	return en_base_url_optional(inputs)
});