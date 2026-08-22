/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unknown_ProjectInputs */

const zh_unknown_project = /** @type {(inputs: Unknown_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知项目`)
};

const en_unknown_project = /** @type {(inputs: Unknown_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`unknown project`)
};

/**
* | output |
* | --- |
* | "unknown project" |
*
* @param {Unknown_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unknown_project = /** @type {((inputs?: Unknown_ProjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unknown_ProjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_unknown_project(inputs)
	return en_unknown_project(inputs)
});