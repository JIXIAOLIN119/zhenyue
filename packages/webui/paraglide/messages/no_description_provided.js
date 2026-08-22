/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Description_ProvidedInputs */

const zh_no_description_provided = /** @type {(inputs: No_Description_ProvidedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无描述。`)
};

const en_no_description_provided = /** @type {(inputs: No_Description_ProvidedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No description provided.`)
};

/**
* | output |
* | --- |
* | "No description provided." |
*
* @param {No_Description_ProvidedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_description_provided = /** @type {((inputs?: No_Description_ProvidedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Description_ProvidedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_description_provided(inputs)
	return en_no_description_provided(inputs)
});