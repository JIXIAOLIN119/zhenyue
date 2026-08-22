/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} N_Items_SingularInputs */

const zh_n_items_singular = /** @type {(inputs: N_Items_SingularInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个项目`)
};

const en_n_items_singular = /** @type {(inputs: N_Items_SingularInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} Item`)
};

/**
* | output |
* | --- |
* | "{count} Item" |
*
* @param {N_Items_SingularInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_items_singular = /** @type {((inputs: N_Items_SingularInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<N_Items_SingularInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_n_items_singular(inputs)
	return en_n_items_singular(inputs)
});