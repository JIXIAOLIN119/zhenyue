/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Start_DownloadInputs */

const zh_start_download = /** @type {(inputs: Start_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始下载`)
};

const en_start_download = /** @type {(inputs: Start_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start Download`)
};

/**
* | output |
* | --- |
* | "Start Download" |
*
* @param {Start_DownloadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const start_download = /** @type {((inputs?: Start_DownloadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Start_DownloadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_start_download(inputs)
	return en_start_download(inputs)
});