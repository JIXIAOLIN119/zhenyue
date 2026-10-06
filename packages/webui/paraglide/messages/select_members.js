/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_MembersInputs */

const zh_select_members = /** @type {(inputs: Select_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择成员`)
};

const en_select_members = /** @type {(inputs: Select_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select Members`)
};

/**
* | output |
* | --- |
* | "Select Members" |
*
* @param {Select_MembersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_members = /** @type {((inputs?: Select_MembersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_MembersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_members(inputs)
	return en_select_members(inputs)
});