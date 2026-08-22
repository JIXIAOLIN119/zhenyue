/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_Project_FirstInputs */

const zh_select_project_first = /** @type {(inputs: Select_Project_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先选择一个项目`)
};

const en_select_project_first = /** @type {(inputs: Select_Project_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a project first`)
};

/**
* | output |
* | --- |
* | "Select a project first" |
*
* @param {Select_Project_FirstInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_project_first = /** @type {((inputs?: Select_Project_FirstInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_Project_FirstInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_project_first(inputs)
	return en_select_project_first(inputs)
});