/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} N_Days_Ago_PluralInputs */

const zh_n_days_ago_plural = /** @type {(inputs: N_Days_Ago_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 天前`)
};

const en_n_days_ago_plural = /** @type {(inputs: N_Days_Ago_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} days ago`)
};

/**
* | output |
* | --- |
* | "{count} days ago" |
*
* @param {N_Days_Ago_PluralInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_days_ago_plural = /** @type {((inputs: N_Days_Ago_PluralInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<N_Days_Ago_PluralInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_n_days_ago_plural(inputs)
	return en_n_days_ago_plural(inputs)
});