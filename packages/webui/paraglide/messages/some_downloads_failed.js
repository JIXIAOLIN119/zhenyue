/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Some_Downloads_FailedInputs */

const zh_some_downloads_failed = /** @type {(inputs: Some_Downloads_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分下载无法启动`)
};

const en_some_downloads_failed = /** @type {(inputs: Some_Downloads_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Some downloads could not be started`)
};

/**
* | output |
* | --- |
* | "Some downloads could not be started" |
*
* @param {Some_Downloads_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const some_downloads_failed = /** @type {((inputs?: Some_Downloads_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Some_Downloads_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_some_downloads_failed(inputs)
	return en_some_downloads_failed(inputs)
});