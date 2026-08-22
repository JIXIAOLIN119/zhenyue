/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sort_Date_ModifiedInputs */

const zh_sort_date_modified = /** @type {(inputs: Sort_Date_ModifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修改日期`)
};

const en_sort_date_modified = /** @type {(inputs: Sort_Date_ModifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date Modified`)
};

/**
* | output |
* | --- |
* | "Date Modified" |
*
* @param {Sort_Date_ModifiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_date_modified = /** @type {((inputs?: Sort_Date_ModifiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_Date_ModifiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sort_date_modified(inputs)
	return en_sort_date_modified(inputs)
});