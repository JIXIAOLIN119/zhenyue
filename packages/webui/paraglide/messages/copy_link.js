/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Copy_LinkInputs */

const zh_copy_link = /** @type {(inputs: Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制链接`)
};

const en_copy_link = /** @type {(inputs: Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy Link`)
};

/**
* | output |
* | --- |
* | "Copy Link" |
*
* @param {Copy_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const copy_link = /** @type {((inputs?: Copy_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Copy_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_copy_link(inputs)
	return en_copy_link(inputs)
});