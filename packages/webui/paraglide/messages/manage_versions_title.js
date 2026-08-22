/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manage_Versions_TitleInputs */

const zh_manage_versions_title = /** @type {(inputs: Manage_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理版本`)
};

const en_manage_versions_title = /** @type {(inputs: Manage_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage versions`)
};

/**
* | output |
* | --- |
* | "Manage versions" |
*
* @param {Manage_Versions_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const manage_versions_title = /** @type {((inputs?: Manage_Versions_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manage_Versions_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_manage_versions_title(inputs)
	return en_manage_versions_title(inputs)
});