/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Emptying_TrashInputs */

const zh_error_emptying_trash = /** @type {(inputs: Error_Emptying_TrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清空回收站出错`)
};

const en_error_emptying_trash = /** @type {(inputs: Error_Emptying_TrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error emptying trash`)
};

/**
* | output |
* | --- |
* | "Error emptying trash" |
*
* @param {Error_Emptying_TrashInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const error_emptying_trash = /** @type {((inputs?: Error_Emptying_TrashInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Emptying_TrashInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_error_emptying_trash(inputs)
	return en_error_emptying_trash(inputs)
});