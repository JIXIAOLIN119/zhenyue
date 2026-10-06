/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Date_CreatedInputs */

const zh_date_created = /** @type {(inputs: Date_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建日期`)
};

const en_date_created = /** @type {(inputs: Date_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date Created`)
};

/**
* | output |
* | --- |
* | "Date Created" |
*
* @param {Date_CreatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const date_created = /** @type {((inputs?: Date_CreatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Date_CreatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_date_created(inputs)
	return en_date_created(inputs)
});