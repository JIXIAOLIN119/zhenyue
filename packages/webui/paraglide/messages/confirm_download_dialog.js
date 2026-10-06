/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Confirm_Download_DialogInputs */

const zh_confirm_download_dialog = /** @type {(inputs: Confirm_Download_DialogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认下载`)
};

const en_confirm_download_dialog = /** @type {(inputs: Confirm_Download_DialogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm Download`)
};

/**
* | output |
* | --- |
* | "Confirm Download" |
*
* @param {Confirm_Download_DialogInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const confirm_download_dialog = /** @type {((inputs?: Confirm_Download_DialogInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Confirm_Download_DialogInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_confirm_download_dialog(inputs)
	return en_confirm_download_dialog(inputs)
});