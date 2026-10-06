/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Version_Removed_SuccessfullyInputs */

const zh_version_removed_successfully = /** @type {(inputs: Version_Removed_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已从版本堆栈中移除版本`)
};

const en_version_removed_successfully = /** @type {(inputs: Version_Removed_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version removed from stack`)
};

/**
* | output |
* | --- |
* | "Version removed from stack" |
*
* @param {Version_Removed_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const version_removed_successfully = /** @type {((inputs?: Version_Removed_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Version_Removed_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_version_removed_successfully(inputs)
	return en_version_removed_successfully(inputs)
});