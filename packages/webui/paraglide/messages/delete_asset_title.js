/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_Asset_TitleInputs */

const zh_delete_asset_title = /** @type {(inputs: Delete_Asset_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除资源？`)
};

const en_delete_asset_title = /** @type {(inputs: Delete_Asset_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete Asset?`)
};

/**
* | output |
* | --- |
* | "Delete Asset?" |
*
* @param {Delete_Asset_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_asset_title = /** @type {((inputs?: Delete_Asset_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_Asset_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_asset_title(inputs)
	return en_delete_asset_title(inputs)
});