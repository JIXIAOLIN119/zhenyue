/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Allow_DownloadInputs */

const zh_allow_download = /** @type {(inputs: Allow_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`允许下载`)
};

const en_allow_download = /** @type {(inputs: Allow_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allow download`)
};

/**
* | output |
* | --- |
* | "Allow download" |
*
* @param {Allow_DownloadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const allow_download = /** @type {((inputs?: Allow_DownloadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Allow_DownloadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_allow_download(inputs)
	return en_allow_download(inputs)
});