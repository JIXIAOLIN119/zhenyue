/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Version_Reordered_SuccessfullyInputs */

const zh_version_reordered_successfully = /** @type {(inputs: Version_Reordered_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本顺序已更新`)
};

const en_version_reordered_successfully = /** @type {(inputs: Version_Reordered_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version order updated`)
};

/**
* | output |
* | --- |
* | "Version order updated" |
*
* @param {Version_Reordered_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const version_reordered_successfully = /** @type {((inputs?: Version_Reordered_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Version_Reordered_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_version_reordered_successfully(inputs)
	return en_version_reordered_successfully(inputs)
});