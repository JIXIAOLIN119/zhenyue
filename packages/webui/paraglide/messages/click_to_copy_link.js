/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Click_To_Copy_LinkInputs */

const zh_click_to_copy_link = /** @type {(inputs: Click_To_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`点击复制链接`)
};

const en_click_to_copy_link = /** @type {(inputs: Click_To_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Click to copy link`)
};

/**
* | output |
* | --- |
* | "Click to copy link" |
*
* @param {Click_To_Copy_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const click_to_copy_link = /** @type {((inputs?: Click_To_Copy_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Click_To_Copy_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_click_to_copy_link(inputs)
	return en_click_to_copy_link(inputs)
});