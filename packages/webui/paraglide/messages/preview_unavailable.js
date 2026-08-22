/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Preview_UnavailableInputs */

const zh_preview_unavailable = /** @type {(inputs: Preview_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法预览`)
};

const en_preview_unavailable = /** @type {(inputs: Preview_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview unavailable`)
};

/**
* | output |
* | --- |
* | "Preview unavailable" |
*
* @param {Preview_UnavailableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const preview_unavailable = /** @type {((inputs?: Preview_UnavailableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Preview_UnavailableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_preview_unavailable(inputs)
	return en_preview_unavailable(inputs)
});