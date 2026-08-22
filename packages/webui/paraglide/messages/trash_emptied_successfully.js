/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Trash_Emptied_SuccessfullyInputs */

const zh_trash_emptied_successfully = /** @type {(inputs: Trash_Emptied_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回收站已清空`)
};

const en_trash_emptied_successfully = /** @type {(inputs: Trash_Emptied_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trash emptied successfully`)
};

/**
* | output |
* | --- |
* | "Trash emptied successfully" |
*
* @param {Trash_Emptied_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const trash_emptied_successfully = /** @type {((inputs?: Trash_Emptied_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Trash_Emptied_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_trash_emptied_successfully(inputs)
	return en_trash_emptied_successfully(inputs)
});