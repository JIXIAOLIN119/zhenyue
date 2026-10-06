/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ProjectInputs */

const zh_project = /** @type {(inputs: ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目`)
};

const en_project = /** @type {(inputs: ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`project`)
};

/**
* | output |
* | --- |
* | "project" |
*
* @param {ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project = /** @type {((inputs?: ProjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ProjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project(inputs)
	return en_project(inputs)
});