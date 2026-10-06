/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Create_New_ProjectInputs */

const zh_create_new_project = /** @type {(inputs: Create_New_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建新项目`)
};

const en_create_new_project = /** @type {(inputs: Create_New_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create New Project`)
};

/**
* | output |
* | --- |
* | "Create New Project" |
*
* @param {Create_New_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_new_project = /** @type {((inputs?: Create_New_ProjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Create_New_ProjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_create_new_project(inputs)
	return en_create_new_project(inputs)
});