/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Link_VisibilityInputs */

const zh_link_visibility = /** @type {(inputs: Link_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接可见性`)
};

const en_link_visibility = /** @type {(inputs: Link_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link Visibility`)
};

/**
* | output |
* | --- |
* | "Link Visibility" |
*
* @param {Link_VisibilityInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const link_visibility = /** @type {((inputs?: Link_VisibilityInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Link_VisibilityInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_link_visibility(inputs)
	return en_link_visibility(inputs)
});