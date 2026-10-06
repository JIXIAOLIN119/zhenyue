/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} An_Unknown_Error_OccurredInputs */

const zh_an_unknown_error_occurred = /** @type {(inputs: An_Unknown_Error_OccurredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发生了未知错误`)
};

const en_an_unknown_error_occurred = /** @type {(inputs: An_Unknown_Error_OccurredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An unknown error occurred`)
};

/**
* | output |
* | --- |
* | "An unknown error occurred" |
*
* @param {An_Unknown_Error_OccurredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const an_unknown_error_occurred = /** @type {((inputs?: An_Unknown_Error_OccurredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<An_Unknown_Error_OccurredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_an_unknown_error_occurred(inputs)
	return en_an_unknown_error_occurred(inputs)
});