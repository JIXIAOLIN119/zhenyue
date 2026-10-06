/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Watermark_EditorInputs */

const zh_watermark_editor = /** @type {(inputs: Watermark_EditorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`水印编辑器`)
};

const en_watermark_editor = /** @type {(inputs: Watermark_EditorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Watermark Editor`)
};

/**
* | output |
* | --- |
* | "Watermark Editor" |
*
* @param {Watermark_EditorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark_editor = /** @type {((inputs?: Watermark_EditorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Watermark_EditorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_watermark_editor(inputs)
	return en_watermark_editor(inputs)
});