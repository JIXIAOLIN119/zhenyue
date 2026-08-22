/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_UpdatedInputs */

const zh_settings_updated = /** @type {(inputs: Settings_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置已更新`)
};

const en_settings_updated = /** @type {(inputs: Settings_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings updated`)
};

/**
* | output |
* | --- |
* | "Settings updated" |
*
* @param {Settings_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_updated = /** @type {((inputs?: Settings_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_settings_updated(inputs)
	return en_settings_updated(inputs)
});