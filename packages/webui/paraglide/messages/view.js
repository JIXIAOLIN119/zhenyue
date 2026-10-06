/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ViewInputs */

const zh_view = /** @type {(inputs: ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看`)
};

const en_view = /** @type {(inputs: ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View`)
};

/**
* | output |
* | --- |
* | "View" |
*
* @param {ViewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const view = /** @type {((inputs?: ViewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ViewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_view(inputs)
	return en_view(inputs)
});