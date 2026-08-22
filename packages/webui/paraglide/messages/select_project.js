/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_ProjectInputs */

const zh_select_project = /** @type {(inputs: Select_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择项目`)
};

const en_select_project = /** @type {(inputs: Select_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select Project`)
};

/**
* | output |
* | --- |
* | "Select Project" |
*
* @param {Select_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_project = /** @type {((inputs?: Select_ProjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_ProjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_project(inputs)
	return en_select_project(inputs)
});