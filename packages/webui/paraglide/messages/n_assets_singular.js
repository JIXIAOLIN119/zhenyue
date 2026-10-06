/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} N_Assets_SingularInputs */

const zh_n_assets_singular = /** @type {(inputs: N_Assets_SingularInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个资源`)
};

const en_n_assets_singular = /** @type {(inputs: N_Assets_SingularInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} Asset`)
};

/**
* | output |
* | --- |
* | "{count} Asset" |
*
* @param {N_Assets_SingularInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_assets_singular = /** @type {((inputs: N_Assets_SingularInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<N_Assets_SingularInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_n_assets_singular(inputs)
	return en_n_assets_singular(inputs)
});