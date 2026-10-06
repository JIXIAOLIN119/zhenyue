/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_ProcessingInputs */

const zh_media_processing = /** @type {(inputs: Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体处理`)
};

const en_media_processing = /** @type {(inputs: Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media Processing`)
};

/**
* | output |
* | --- |
* | "Media Processing" |
*
* @param {Media_ProcessingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_processing = /** @type {((inputs?: Media_ProcessingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_ProcessingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_media_processing(inputs)
	return en_media_processing(inputs)
});