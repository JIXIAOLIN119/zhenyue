/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} N_Days_Ago_SingularInputs */

const zh_n_days_ago_singular = /** @type {(inputs: N_Days_Ago_SingularInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 天前`)
};

const en_n_days_ago_singular = /** @type {(inputs: N_Days_Ago_SingularInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} day ago`)
};

/**
* | output |
* | --- |
* | "{count} day ago" |
*
* @param {N_Days_Ago_SingularInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_days_ago_singular = /** @type {((inputs: N_Days_Ago_SingularInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<N_Days_Ago_SingularInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_n_days_ago_singular(inputs)
	return en_n_days_ago_singular(inputs)
});