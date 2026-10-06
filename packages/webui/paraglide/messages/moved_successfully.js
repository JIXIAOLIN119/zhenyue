/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Moved_SuccessfullyInputs */

const zh_moved_successfully = /** @type {(inputs: Moved_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移动成功`)
};

const en_moved_successfully = /** @type {(inputs: Moved_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moved successfully`)
};

/**
* | output |
* | --- |
* | "Moved successfully" |
*
* @param {Moved_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const moved_successfully = /** @type {((inputs?: Moved_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Moved_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_moved_successfully(inputs)
	return en_moved_successfully(inputs)
});