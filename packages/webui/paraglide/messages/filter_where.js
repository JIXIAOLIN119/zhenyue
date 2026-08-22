/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Filter_WhereInputs */

const zh_filter_where = /** @type {(inputs: Filter_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`条件`)
};

const en_filter_where = /** @type {(inputs: Filter_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where`)
};

/**
* | output |
* | --- |
* | "Where" |
*
* @param {Filter_WhereInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const filter_where = /** @type {((inputs?: Filter_WhereInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Filter_WhereInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_filter_where(inputs)
	return en_filter_where(inputs)
});