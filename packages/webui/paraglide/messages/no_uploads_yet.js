/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Uploads_YetInputs */

const zh_no_uploads_yet = /** @type {(inputs: No_Uploads_YetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无上传`)
};

const en_no_uploads_yet = /** @type {(inputs: No_Uploads_YetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No uploads yet`)
};

/**
* | output |
* | --- |
* | "No uploads yet" |
*
* @param {No_Uploads_YetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_uploads_yet = /** @type {((inputs?: No_Uploads_YetInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Uploads_YetInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_uploads_yet(inputs)
	return en_no_uploads_yet(inputs)
});