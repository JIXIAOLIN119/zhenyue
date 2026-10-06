/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Toggle_CheckedInputs */

const zh_toggle_checked = /** @type {(inputs: Toggle_CheckedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已选中`)
};

const en_toggle_checked = /** @type {(inputs: Toggle_CheckedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checked`)
};

/**
* | output |
* | --- |
* | "Checked" |
*
* @param {Toggle_CheckedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const toggle_checked = /** @type {((inputs?: Toggle_CheckedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Toggle_CheckedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_toggle_checked(inputs)
	return en_toggle_checked(inputs)
});