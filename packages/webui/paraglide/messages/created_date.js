/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Created_DateInputs */

const zh_created_date = /** @type {(inputs: Created_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建日期`)
};

const en_created_date = /** @type {(inputs: Created_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Created Date`)
};

/**
* | output |
* | --- |
* | "Created Date" |
*
* @param {Created_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const created_date = /** @type {((inputs?: Created_DateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Created_DateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_created_date(inputs)
	return en_created_date(inputs)
});