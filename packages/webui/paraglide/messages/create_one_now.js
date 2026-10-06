/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Create_One_NowInputs */

const zh_create_one_now = /** @type {(inputs: Create_One_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`立即创建`)
};

const en_create_one_now = /** @type {(inputs: Create_One_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create one now`)
};

/**
* | output |
* | --- |
* | "Create one now" |
*
* @param {Create_One_NowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_one_now = /** @type {((inputs?: Create_One_NowInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Create_One_NowInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_create_one_now(inputs)
	return en_create_one_now(inputs)
});