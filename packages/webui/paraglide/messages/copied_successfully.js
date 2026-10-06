/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Copied_SuccessfullyInputs */

const zh_copied_successfully = /** @type {(inputs: Copied_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制成功`)
};

const en_copied_successfully = /** @type {(inputs: Copied_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied successfully`)
};

/**
* | output |
* | --- |
* | "Copied successfully" |
*
* @param {Copied_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const copied_successfully = /** @type {((inputs?: Copied_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Copied_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_copied_successfully(inputs)
	return en_copied_successfully(inputs)
});