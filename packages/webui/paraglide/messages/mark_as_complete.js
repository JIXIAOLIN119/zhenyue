/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mark_As_CompleteInputs */

const zh_mark_as_complete = /** @type {(inputs: Mark_As_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为已完成`)
};

const en_mark_as_complete = /** @type {(inputs: Mark_As_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark as complete`)
};

/**
* | output |
* | --- |
* | "Mark as complete" |
*
* @param {Mark_As_CompleteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mark_as_complete = /** @type {((inputs?: Mark_As_CompleteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mark_As_CompleteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mark_as_complete(inputs)
	return en_mark_as_complete(inputs)
});