/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Projects_YetInputs */

const zh_no_projects_yet = /** @type {(inputs: No_Projects_YetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无项目。`)
};

const en_no_projects_yet = /** @type {(inputs: No_Projects_YetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No projects yet.`)
};

/**
* | output |
* | --- |
* | "No projects yet." |
*
* @param {No_Projects_YetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_projects_yet = /** @type {((inputs?: No_Projects_YetInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Projects_YetInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_projects_yet(inputs)
	return en_no_projects_yet(inputs)
});