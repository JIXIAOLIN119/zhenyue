/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Renamed_SuccessfullyInputs */

const zh_renamed_successfully = /** @type {(inputs: Renamed_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重命名成功`)
};

const en_renamed_successfully = /** @type {(inputs: Renamed_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Renamed successfully`)
};

/**
* | output |
* | --- |
* | "Renamed successfully" |
*
* @param {Renamed_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const renamed_successfully = /** @type {((inputs?: Renamed_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Renamed_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_renamed_successfully(inputs)
	return en_renamed_successfully(inputs)
});