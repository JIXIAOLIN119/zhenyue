/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} N_Assets_PluralInputs */

const zh_n_assets_plural = /** @type {(inputs: N_Assets_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个资源`)
};

const en_n_assets_plural = /** @type {(inputs: N_Assets_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} Assets`)
};

/**
* | output |
* | --- |
* | "{count} Assets" |
*
* @param {N_Assets_PluralInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_assets_plural = /** @type {((inputs: N_Assets_PluralInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<N_Assets_PluralInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_n_assets_plural(inputs)
	return en_n_assets_plural(inputs)
});