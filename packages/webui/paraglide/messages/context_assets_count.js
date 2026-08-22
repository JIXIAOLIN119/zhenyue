/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Context_Assets_CountInputs */

const zh_context_assets_count = /** @type {(inputs: Context_Assets_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上下文资源 (${i?.count})`)
};

const en_context_assets_count = /** @type {(inputs: Context_Assets_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Context Assets (${i?.count})`)
};

/**
* | output |
* | --- |
* | "Context Assets ({count})" |
*
* @param {Context_Assets_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const context_assets_count = /** @type {((inputs: Context_Assets_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Context_Assets_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_context_assets_count(inputs)
	return en_context_assets_count(inputs)
});