/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Switch_VersionInputs */

const zh_switch_version = /** @type {(inputs: Switch_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`切换版本`)
};

const en_switch_version = /** @type {(inputs: Switch_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch version`)
};

/**
* | output |
* | --- |
* | "Switch version" |
*
* @param {Switch_VersionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const switch_version = /** @type {((inputs?: Switch_VersionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Switch_VersionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_switch_version(inputs)
	return en_switch_version(inputs)
});