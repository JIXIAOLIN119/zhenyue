/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} InstalledInputs */

const zh_installed = /** @type {(inputs: InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已安装`)
};

const en_installed = /** @type {(inputs: InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installed`)
};

/**
* | output |
* | --- |
* | "Installed" |
*
* @param {InstalledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const installed = /** @type {((inputs?: InstalledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<InstalledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_installed(inputs)
	return en_installed(inputs)
});