/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Saving_EllipsisInputs */

const zh_saving_ellipsis = /** @type {(inputs: Saving_EllipsisInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中...`)
};

const en_saving_ellipsis = /** @type {(inputs: Saving_EllipsisInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving...`)
};

/**
* | output |
* | --- |
* | "Saving..." |
*
* @param {Saving_EllipsisInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const saving_ellipsis = /** @type {((inputs?: Saving_EllipsisInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Saving_EllipsisInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_saving_ellipsis(inputs)
	return en_saving_ellipsis(inputs)
});