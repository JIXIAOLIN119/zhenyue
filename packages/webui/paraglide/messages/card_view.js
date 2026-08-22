/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Card_ViewInputs */

const zh_card_view = /** @type {(inputs: Card_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`卡片视图`)
};

const en_card_view = /** @type {(inputs: Card_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Card View`)
};

/**
* | output |
* | --- |
* | "Card View" |
*
* @param {Card_ViewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const card_view = /** @type {((inputs?: Card_ViewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Card_ViewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_card_view(inputs)
	return en_card_view(inputs)
});