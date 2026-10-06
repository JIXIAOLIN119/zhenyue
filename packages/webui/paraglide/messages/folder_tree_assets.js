/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Folder_Tree_AssetsInputs */

const zh_folder_tree_assets = /** @type {(inputs: Folder_Tree_AssetsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`资产`)
};

const en_folder_tree_assets = /** @type {(inputs: Folder_Tree_AssetsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assets`)
};

/**
* | output |
* | --- |
* | "Assets" |
*
* @param {Folder_Tree_AssetsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder_tree_assets = /** @type {((inputs?: Folder_Tree_AssetsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Folder_Tree_AssetsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_folder_tree_assets(inputs)
	return en_folder_tree_assets(inputs)
});