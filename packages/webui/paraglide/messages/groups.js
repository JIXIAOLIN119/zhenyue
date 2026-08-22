/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} GroupsInputs */

const zh_groups = /** @type {(inputs: GroupsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分组`)
};

const en_groups = /** @type {(inputs: GroupsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Groups`)
};

/**
* | output |
* | --- |
* | "Groups" |
*
* @param {GroupsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const groups = /** @type {((inputs?: GroupsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<GroupsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_groups(inputs)
	return en_groups(inputs)
});