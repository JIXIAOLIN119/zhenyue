/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Uploads_HintInputs */

const zh_no_uploads_hint = /** @type {(inputs: No_Uploads_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在项目视图中上传文件以在此处跟踪进度。`)
};

const en_no_uploads_hint = /** @type {(inputs: No_Uploads_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload files in the project view to track progress here.`)
};

/**
* | output |
* | --- |
* | "Upload files in the project view to track progress here." |
*
* @param {No_Uploads_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_uploads_hint = /** @type {((inputs?: No_Uploads_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Uploads_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_uploads_hint(inputs)
	return en_no_uploads_hint(inputs)
});