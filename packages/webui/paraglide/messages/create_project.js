/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Create_ProjectInputs */

const zh_create_project = /** @type {(inputs: Create_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建项目`)
};

const en_create_project = /** @type {(inputs: Create_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create Project`)
};

/**
* | output |
* | --- |
* | "Create Project" |
*
* @param {Create_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_project = /** @type {((inputs?: Create_ProjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Create_ProjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_create_project(inputs)
	return en_create_project(inputs)
});