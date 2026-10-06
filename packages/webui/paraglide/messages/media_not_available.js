/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Not_AvailableInputs */

const zh_media_not_available = /** @type {(inputs: Media_Not_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体不可用。`)
};

const en_media_not_available = /** @type {(inputs: Media_Not_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media is not available.`)
};

/**
* | output |
* | --- |
* | "Media is not available." |
*
* @param {Media_Not_AvailableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_not_available = /** @type {((inputs?: Media_Not_AvailableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Not_AvailableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_media_not_available(inputs)
	return en_media_not_available(inputs)
});