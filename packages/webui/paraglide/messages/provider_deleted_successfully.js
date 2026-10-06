/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Provider_Deleted_SuccessfullyInputs */

const zh_provider_deleted_successfully = /** @type {(inputs: Provider_Deleted_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提供商删除成功`)
};

const en_provider_deleted_successfully = /** @type {(inputs: Provider_Deleted_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provider deleted successfully`)
};

/**
* | output |
* | --- |
* | "Provider deleted successfully" |
*
* @param {Provider_Deleted_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_deleted_successfully = /** @type {((inputs?: Provider_Deleted_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Provider_Deleted_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_provider_deleted_successfully(inputs)
	return en_provider_deleted_successfully(inputs)
});