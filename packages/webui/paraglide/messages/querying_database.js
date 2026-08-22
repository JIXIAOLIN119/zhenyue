/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Querying_DatabaseInputs */

const zh_querying_database = /** @type {(inputs: Querying_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在查询数据库...`)
};

const en_querying_database = /** @type {(inputs: Querying_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Querying database...`)
};

/**
* | output |
* | --- |
* | "Querying database..." |
*
* @param {Querying_DatabaseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const querying_database = /** @type {((inputs?: Querying_DatabaseInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Querying_DatabaseInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_querying_database(inputs)
	return en_querying_database(inputs)
});