/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Processing_DescriptionInputs */

const zh_media_processing_description = /** @type {(inputs: Media_Processing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理团队的媒体转码配置。`)
};

const en_media_processing_description = /** @type {(inputs: Media_Processing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage your team's media transcoding configurations.`)
};

/**
* | output |
* | --- |
* | "Manage your team's media transcoding configurations." |
*
* @param {Media_Processing_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_processing_description = /** @type {((inputs?: Media_Processing_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Processing_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_media_processing_description(inputs)
	return en_media_processing_description(inputs)
});