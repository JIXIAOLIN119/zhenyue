/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Copy_ToInputs */

const zh_copy_to = /** @type {(inputs: Copy_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制到`)
};

const en_copy_to = /** @type {(inputs: Copy_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy to`)
};

/**
* | output |
* | --- |
* | "Copy to" |
*
* @param {Copy_ToInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const copy_to = /** @type {((inputs?: Copy_ToInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Copy_ToInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_copy_to(inputs)
	return en_copy_to(inputs)
});