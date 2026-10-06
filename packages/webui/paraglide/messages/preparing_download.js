/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Preparing_DownloadInputs */

const zh_preparing_download = /** @type {(inputs: Preparing_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在准备下载`)
};

const en_preparing_download = /** @type {(inputs: Preparing_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparing Download`)
};

/**
* | output |
* | --- |
* | "Preparing Download" |
*
* @param {Preparing_DownloadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const preparing_download = /** @type {((inputs?: Preparing_DownloadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Preparing_DownloadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_preparing_download(inputs)
	return en_preparing_download(inputs)
});