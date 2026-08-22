/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Attach_FilesInputs */

const zh_attach_files = /** @type {(inputs: Attach_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`附加文件`)
};

const en_attach_files = /** @type {(inputs: Attach_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach files`)
};

/**
* | output |
* | --- |
* | "Attach files" |
*
* @param {Attach_FilesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const attach_files = /** @type {((inputs?: Attach_FilesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Attach_FilesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_attach_files(inputs)
	return en_attach_files(inputs)
});