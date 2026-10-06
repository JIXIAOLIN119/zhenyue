/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Create_AccountInputs */

const zh_create_account = /** @type {(inputs: Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建账户`)
};

const en_create_account = /** @type {(inputs: Create_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create Account`)
};

/**
* | output |
* | --- |
* | "Create Account" |
*
* @param {Create_AccountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_account = /** @type {((inputs?: Create_AccountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Create_AccountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_create_account(inputs)
	return en_create_account(inputs)
});