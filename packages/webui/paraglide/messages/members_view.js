/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Members_ViewInputs */

const zh_members_view = /** @type {(inputs: Members_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成员`)
};

const en_members_view = /** @type {(inputs: Members_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Members`)
};

/**
* | output |
* | --- |
* | "Members" |
*
* @param {Members_ViewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const members_view = /** @type {((inputs?: Members_ViewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Members_ViewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_members_view(inputs)
	return en_members_view(inputs)
});