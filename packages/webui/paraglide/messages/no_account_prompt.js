/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Account_PromptInputs */

const zh_no_account_prompt = /** @type {(inputs: No_Account_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有账户？`)
};

const en_no_account_prompt = /** @type {(inputs: No_Account_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Don't have an account? `)
};

/**
* | output |
* | --- |
* | "Don't have an account?" |
*
* @param {No_Account_PromptInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_account_prompt = /** @type {((inputs?: No_Account_PromptInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Account_PromptInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_account_prompt(inputs)
	return en_no_account_prompt(inputs)
});