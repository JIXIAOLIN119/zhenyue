/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manage_VersionsInputs */

const zh_manage_versions = /** @type {(inputs: Manage_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理版本`)
};

const en_manage_versions = /** @type {(inputs: Manage_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage versions`)
};

/**
* | output |
* | --- |
* | "Manage versions" |
*
* @param {Manage_VersionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const manage_versions = /** @type {((inputs?: Manage_VersionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manage_VersionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_manage_versions(inputs)
	return en_manage_versions(inputs)
});