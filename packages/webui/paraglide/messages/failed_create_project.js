/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Create_ProjectInputs */

const zh_failed_create_project = /** @type {(inputs: Failed_Create_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建项目失败`)
};

const en_failed_create_project = /** @type {(inputs: Failed_Create_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to create project`)
};

/**
* | output |
* | --- |
* | "Failed to create project" |
*
* @param {Failed_Create_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_create_project = /** @type {((inputs?: Failed_Create_ProjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Create_ProjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_create_project(inputs)
	return en_failed_create_project(inputs)
});