/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Filesystem_RestrictionInputs */

const zh_filesystem_restriction = /** @type {(inputs: Filesystem_RestrictionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件系统限制`)
};

const en_filesystem_restriction = /** @type {(inputs: Filesystem_RestrictionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filesystem Restriction`)
};

/**
* | output |
* | --- |
* | "Filesystem Restriction" |
*
* @param {Filesystem_RestrictionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const filesystem_restriction = /** @type {((inputs?: Filesystem_RestrictionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Filesystem_RestrictionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_filesystem_restriction(inputs)
	return en_filesystem_restriction(inputs)
});