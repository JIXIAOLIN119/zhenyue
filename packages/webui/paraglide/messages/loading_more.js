/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Loading_MoreInputs */

const zh_loading_more = /** @type {(inputs: Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载更多...`)
};

const en_loading_more = /** @type {(inputs: Loading_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading more...`)
};

/**
* | output |
* | --- |
* | "Loading more..." |
*
* @param {Loading_MoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const loading_more = /** @type {((inputs?: Loading_MoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loading_MoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_loading_more(inputs)
	return en_loading_more(inputs)
});