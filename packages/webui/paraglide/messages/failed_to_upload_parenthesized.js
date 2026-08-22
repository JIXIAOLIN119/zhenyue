/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Upload_ParenthesizedInputs */

const zh_failed_to_upload_parenthesized = /** @type {(inputs: Failed_To_Upload_ParenthesizedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（上传失败）`)
};

const en_failed_to_upload_parenthesized = /** @type {(inputs: Failed_To_Upload_ParenthesizedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(Failed to upload)`)
};

/**
* | output |
* | --- |
* | "(Failed to upload)" |
*
* @param {Failed_To_Upload_ParenthesizedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_upload_parenthesized = /** @type {((inputs?: Failed_To_Upload_ParenthesizedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Upload_ParenthesizedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_upload_parenthesized(inputs)
	return en_failed_to_upload_parenthesized(inputs)
});