/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Visible_CountInputs */

const zh_visible_count = /** @type {(inputs: Visible_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`（${i?.count} 个可见）`)
};

const en_visible_count = /** @type {(inputs: Visible_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`(${i?.count} visible)`)
};

/**
* | output |
* | --- |
* | "({count} visible)" |
*
* @param {Visible_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const visible_count = /** @type {((inputs: Visible_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Visible_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_visible_count(inputs)
	return en_visible_count(inputs)
});