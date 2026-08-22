/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Create_New_VersionInputs */

const zh_create_new_version = /** @type {(inputs: Create_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建新版本`)
};

const en_create_new_version = /** @type {(inputs: Create_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create new version`)
};

/**
* | output |
* | --- |
* | "Create new version" |
*
* @param {Create_New_VersionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_new_version = /** @type {((inputs?: Create_New_VersionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Create_New_VersionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_create_new_version(inputs)
	return en_create_new_version(inputs)
});