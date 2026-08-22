/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Demo_Access_InstructionsInputs */

const zh_demo_access_instructions = /** @type {(inputs: Demo_Access_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用 "foo@bar.com" 作为邮箱，"foo" 作为密码登录。`)
};

const en_demo_access_instructions = /** @type {(inputs: Demo_Access_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use "foo@bar.com" as the email and "foo" as the password to login.`)
};

/**
* | output |
* | --- |
* | "Use \"foo@bar.com\" as the email and \"foo\" as the password to login." |
*
* @param {Demo_Access_InstructionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const demo_access_instructions = /** @type {((inputs?: Demo_Access_InstructionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Demo_Access_InstructionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_demo_access_instructions(inputs)
	return en_demo_access_instructions(inputs)
});