/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Compare_VersionsInputs */

const zh_compare_versions = /** @type {(inputs: Compare_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对比版本`)
};

const en_compare_versions = /** @type {(inputs: Compare_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare Versions`)
};

/**
* | output |
* | --- |
* | "Compare Versions" |
*
* @param {Compare_VersionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const compare_versions = /** @type {((inputs?: Compare_VersionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Compare_VersionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_compare_versions(inputs)
	return en_compare_versions(inputs)
});