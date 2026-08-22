/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_Asset_To_View_DetailsInputs */

const zh_select_asset_to_view_details = /** @type {(inputs: Select_Asset_To_View_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择资产查看详情`)
};

const en_select_asset_to_view_details = /** @type {(inputs: Select_Asset_To_View_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select an asset to view details`)
};

/**
* | output |
* | --- |
* | "Select an asset to view details" |
*
* @param {Select_Asset_To_View_DetailsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_asset_to_view_details = /** @type {((inputs?: Select_Asset_To_View_DetailsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_Asset_To_View_DetailsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_asset_to_view_details(inputs)
	return en_select_asset_to_view_details(inputs)
});