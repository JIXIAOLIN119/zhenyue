/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} VersionsInputs */

const zh_versions = /** @type {(inputs: VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const en_versions = /** @type {(inputs: VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions`)
};

/**
* | output |
* | --- |
* | "Versions" |
*
* @param {VersionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const versions = /** @type {((inputs?: VersionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<VersionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_versions(inputs)
	return en_versions(inputs)
});