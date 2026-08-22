/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_NowInputs */

const zh_delete_now = /** @type {(inputs: Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`立即删除`)
};

const en_delete_now = /** @type {(inputs: Delete_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete Now`)
};

/**
* | output |
* | --- |
* | "Delete Now" |
*
* @param {Delete_NowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_now = /** @type {((inputs?: Delete_NowInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_NowInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_now(inputs)
	return en_delete_now(inputs)
});