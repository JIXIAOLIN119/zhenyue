/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} LoadingInputs */

const zh_loading = /** @type {(inputs: LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载中...`)
};

const en_loading = /** @type {(inputs: LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading...`)
};

/**
* | output |
* | --- |
* | "Loading..." |
*
* @param {LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const loading = /** @type {((inputs?: LoadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<LoadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_loading(inputs)
	return en_loading(inputs)
});