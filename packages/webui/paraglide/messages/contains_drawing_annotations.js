/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Contains_Drawing_AnnotationsInputs */

const zh_contains_drawing_annotations = /** @type {(inputs: Contains_Drawing_AnnotationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`包含绘图标注`)
};

const en_contains_drawing_annotations = /** @type {(inputs: Contains_Drawing_AnnotationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contains drawing annotations`)
};

/**
* | output |
* | --- |
* | "Contains drawing annotations" |
*
* @param {Contains_Drawing_AnnotationsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const contains_drawing_annotations = /** @type {((inputs?: Contains_Drawing_AnnotationsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contains_Drawing_AnnotationsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_contains_drawing_annotations(inputs)
	return en_contains_drawing_annotations(inputs)
});