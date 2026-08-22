/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Successfully_Moved_ItemsInputs */

const zh_successfully_moved_items = /** @type {(inputs: Successfully_Moved_ItemsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`成功移动了 ${i?.count} 个项目`)
};

const en_successfully_moved_items = /** @type {(inputs: Successfully_Moved_ItemsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Successfully moved ${i?.count} item(s)`)
};

/**
* | output |
* | --- |
* | "Successfully moved {count} item(s)" |
*
* @param {Successfully_Moved_ItemsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const successfully_moved_items = /** @type {((inputs: Successfully_Moved_ItemsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Successfully_Moved_ItemsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_successfully_moved_items(inputs)
	return en_successfully_moved_items(inputs)
});