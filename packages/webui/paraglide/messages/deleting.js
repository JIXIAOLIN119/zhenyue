/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} DeletingInputs */

const zh_deleting = /** @type {(inputs: DeletingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除中...`)
};

const en_deleting = /** @type {(inputs: DeletingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleting...`)
};

/**
* | output |
* | --- |
* | "Deleting..." |
*
* @param {DeletingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const deleting = /** @type {((inputs?: DeletingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<DeletingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_deleting(inputs)
	return en_deleting(inputs)
});