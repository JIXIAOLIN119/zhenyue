/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_A_ProjectInputs */

const zh_select_a_project = /** @type {(inputs: Select_A_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择一个项目`)
};

const en_select_a_project = /** @type {(inputs: Select_A_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a project`)
};

/**
* | output |
* | --- |
* | "Select a project" |
*
* @param {Select_A_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_a_project = /** @type {((inputs?: Select_A_ProjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_A_ProjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_a_project(inputs)
	return en_select_a_project(inputs)
});