/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} New_LabelInputs */

const zh_new_label = /** @type {(inputs: New_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建`)
};

const en_new_label = /** @type {(inputs: New_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New`)
};

/**
* | output |
* | --- |
* | "New" |
*
* @param {New_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const new_label = /** @type {((inputs?: New_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<New_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_new_label(inputs)
	return en_new_label(inputs)
});