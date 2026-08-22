/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Updated_DateInputs */

const zh_updated_date = /** @type {(inputs: Updated_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新于`)
};

const en_updated_date = /** @type {(inputs: Updated_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updated`)
};

/**
* | output |
* | --- |
* | "Updated" |
*
* @param {Updated_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const updated_date = /** @type {((inputs?: Updated_DateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Updated_DateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_updated_date(inputs)
	return en_updated_date(inputs)
});