/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Field_PlaceholderInputs */

const zh_email_field_placeholder = /** @type {(inputs: Email_Field_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zhangsan@example.com`)
};

const en_email_field_placeholder = /** @type {(inputs: Email_Field_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`john@example.com`)
};

/**
* | output |
* | --- |
* | "john@example.com" |
*
* @param {Email_Field_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_field_placeholder = /** @type {((inputs?: Email_Field_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Field_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_email_field_placeholder(inputs)
	return en_email_field_placeholder(inputs)
});