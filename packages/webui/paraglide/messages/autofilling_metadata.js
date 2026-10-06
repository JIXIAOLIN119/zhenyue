/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Autofilling_MetadataInputs */

const zh_autofilling_metadata = /** @type {(inputs: Autofilling_MetadataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在自动填充元数据...`)
};

const en_autofilling_metadata = /** @type {(inputs: Autofilling_MetadataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autofilling metadata...`)
};

/**
* | output |
* | --- |
* | "Autofilling metadata..." |
*
* @param {Autofilling_MetadataInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofilling_metadata = /** @type {((inputs?: Autofilling_MetadataInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Autofilling_MetadataInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_autofilling_metadata(inputs)
	return en_autofilling_metadata(inputs)
});