/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} File_Card_ProcessingInputs */

const zh_file_card_processing = /** @type {(inputs: File_Card_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处理中`)
};

const en_file_card_processing = /** @type {(inputs: File_Card_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processing`)
};

/**
* | output |
* | --- |
* | "Processing" |
*
* @param {File_Card_ProcessingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const file_card_processing = /** @type {((inputs?: File_Card_ProcessingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<File_Card_ProcessingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_file_card_processing(inputs)
	return en_file_card_processing(inputs)
});