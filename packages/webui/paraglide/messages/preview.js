/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} PreviewInputs */

const zh_preview = /** @type {(inputs: PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预览`)
};

const en_preview = /** @type {(inputs: PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview`)
};

/**
* | output |
* | --- |
* | "Preview" |
*
* @param {PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const preview = /** @type {((inputs?: PreviewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<PreviewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_preview(inputs)
	return en_preview(inputs)
});