/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Toggle_AnnotationInputs */

const zh_toggle_annotation = /** @type {(inputs: Toggle_AnnotationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`切换标注`)
};

const en_toggle_annotation = /** @type {(inputs: Toggle_AnnotationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toggle Annotation`)
};

/**
* | output |
* | --- |
* | "Toggle Annotation" |
*
* @param {Toggle_AnnotationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const toggle_annotation = /** @type {((inputs?: Toggle_AnnotationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Toggle_AnnotationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_toggle_annotation(inputs)
	return en_toggle_annotation(inputs)
});