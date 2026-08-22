/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Update_ProjectInputs */

const zh_failed_update_project = /** @type {(inputs: Failed_Update_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新项目失败`)
};

const en_failed_update_project = /** @type {(inputs: Failed_Update_ProjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update project`)
};

/**
* | output |
* | --- |
* | "Failed to update project" |
*
* @param {Failed_Update_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_project = /** @type {((inputs?: Failed_Update_ProjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Update_ProjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_update_project(inputs)
	return en_failed_update_project(inputs)
});