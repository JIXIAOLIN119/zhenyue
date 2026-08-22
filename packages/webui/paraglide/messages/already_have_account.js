/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Already_Have_AccountInputs */

const zh_already_have_account = /** @type {(inputs: Already_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已有账户？`)
};

const en_already_have_account = /** @type {(inputs: Already_Have_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Already have an account? `)
};

/**
* | output |
* | --- |
* | "Already have an account?" |
*
* @param {Already_Have_AccountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const already_have_account = /** @type {((inputs?: Already_Have_AccountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Already_Have_AccountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_already_have_account(inputs)
	return en_already_have_account(inputs)
});