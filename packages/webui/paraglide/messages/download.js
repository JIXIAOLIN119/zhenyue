/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} DownloadInputs */

const zh_download = /** @type {(inputs: DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载`)
};

const en_download = /** @type {(inputs: DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

/**
* | output |
* | --- |
* | "Download" |
*
* @param {DownloadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const download = /** @type {((inputs?: DownloadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<DownloadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_download(inputs)
	return en_download(inputs)
});