/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mark_All_As_ReadInputs */

const zh_mark_all_as_read = /** @type {(inputs: Mark_All_As_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部标记为已读`)
};

const en_mark_all_as_read = /** @type {(inputs: Mark_All_As_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark all as read`)
};

/**
* | output |
* | --- |
* | "Mark all as read" |
*
* @param {Mark_All_As_ReadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mark_all_as_read = /** @type {((inputs?: Mark_All_As_ReadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mark_All_As_ReadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_mark_all_as_read(inputs)
	return en_mark_all_as_read(inputs)
});