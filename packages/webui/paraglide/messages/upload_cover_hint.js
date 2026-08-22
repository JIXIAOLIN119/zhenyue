/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Cover_HintInputs */

const zh_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖放或浏览文件。推荐比例 1:1（400×400像素）。`)
};

const en_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag and drop, or browse. Recommended 1:1 (400×400px).`)
};

/**
* | output |
* | --- |
* | "Drag and drop, or browse. Recommended 1:1 (400×400px)." |
*
* @param {Upload_Cover_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload_cover_hint = /** @type {((inputs?: Upload_Cover_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_upload_cover_hint(inputs)
	return en_upload_cover_hint(inputs)
});