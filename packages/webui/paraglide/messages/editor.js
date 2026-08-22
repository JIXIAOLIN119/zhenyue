/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} EditorInputs */

const zh_editor = /** @type {(inputs: EditorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const en_editor = /** @type {(inputs: EditorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editor`)
};

/**
* | output |
* | --- |
* | "Editor" |
*
* @param {EditorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor = /** @type {((inputs?: EditorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<EditorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_editor(inputs)
	return en_editor(inputs)
});