/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Registration_DisabledInputs */

const zh_registration_disabled = /** @type {(inputs: Registration_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注册已关闭`)
};

const en_registration_disabled = /** @type {(inputs: Registration_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registration Disabled`)
};

/**
* | output |
* | --- |
* | "Registration Disabled" |
*
* @param {Registration_DisabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const registration_disabled = /** @type {((inputs?: Registration_DisabledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Registration_DisabledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_registration_disabled(inputs)
	return en_registration_disabled(inputs)
});