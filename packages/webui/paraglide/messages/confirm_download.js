/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Confirm_DownloadInputs */

const zh_confirm_download = /** @type {(inputs: Confirm_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认下载`)
};

const en_confirm_download = /** @type {(inputs: Confirm_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm Download`)
};

/**
* | output |
* | --- |
* | "Confirm Download" |
*
* @param {Confirm_DownloadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const confirm_download = /** @type {((inputs?: Confirm_DownloadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Confirm_DownloadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_confirm_download(inputs)
	return en_confirm_download(inputs)
});