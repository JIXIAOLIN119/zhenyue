/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ThumbnailInputs */

const zh_thumbnail = /** @type {(inputs: ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缩略图`)
};

const en_thumbnail = /** @type {(inputs: ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thumbnail`)
};

/**
* | output |
* | --- |
* | "Thumbnail" |
*
* @param {ThumbnailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thumbnail = /** @type {((inputs?: ThumbnailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ThumbnailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_thumbnail(inputs)
	return en_thumbnail(inputs)
});