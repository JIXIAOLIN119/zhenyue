/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} InstallInputs */

const zh_install = /** @type {(inputs: InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装`)
};

const en_install = /** @type {(inputs: InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install`)
};

/**
* | output |
* | --- |
* | "Install" |
*
* @param {InstallInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const install = /** @type {((inputs?: InstallInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<InstallInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_install(inputs)
	return en_install(inputs)
});