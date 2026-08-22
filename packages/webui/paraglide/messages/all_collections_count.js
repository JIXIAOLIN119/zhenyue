/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} All_Collections_CountInputs */

const zh_all_collections_count = /** @type {(inputs: All_Collections_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`所有媒体合集 (${i?.count})`)
};

const en_all_collections_count = /** @type {(inputs: All_Collections_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`All Collections (${i?.count})`)
};

/**
* | output |
* | --- |
* | "All Collections ({count})" |
*
* @param {All_Collections_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_collections_count = /** @type {((inputs: All_Collections_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<All_Collections_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_all_collections_count(inputs)
	return en_all_collections_count(inputs)
});