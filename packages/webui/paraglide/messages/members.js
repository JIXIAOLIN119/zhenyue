/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} MembersInputs */

const zh_members = /** @type {(inputs: MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成员`)
};

const en_members = /** @type {(inputs: MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Members`)
};

/**
* | output |
* | --- |
* | "Members" |
*
* @param {MembersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const members = /** @type {((inputs?: MembersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<MembersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_members(inputs)
	return en_members(inputs)
});