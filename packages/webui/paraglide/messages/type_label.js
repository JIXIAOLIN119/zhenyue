/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Type_LabelInputs */

const zh_type_label = /** @type {(inputs: Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`类型：`)
};

const en_type_label = /** @type {(inputs: Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type:`)
};

/**
* | output |
* | --- |
* | "Type:" |
*
* @param {Type_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const type_label = /** @type {((inputs?: Type_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Type_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_type_label(inputs)
	return en_type_label(inputs)
});