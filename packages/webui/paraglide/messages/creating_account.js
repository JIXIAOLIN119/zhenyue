/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Creating_AccountInputs */

const zh_creating_account = /** @type {(inputs: Creating_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建账户中...`)
};

const en_creating_account = /** @type {(inputs: Creating_AccountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creating account...`)
};

/**
* | output |
* | --- |
* | "Creating account..." |
*
* @param {Creating_AccountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const creating_account = /** @type {((inputs?: Creating_AccountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Creating_AccountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_creating_account(inputs)
	return en_creating_account(inputs)
});