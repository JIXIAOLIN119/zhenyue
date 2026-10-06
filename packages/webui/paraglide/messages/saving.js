/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} SavingInputs */

const zh_saving = /** @type {(inputs: SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中`)
};

const en_saving = /** @type {(inputs: SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving`)
};

/**
* | output |
* | --- |
* | "Saving" |
*
* @param {SavingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const saving = /** @type {((inputs?: SavingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SavingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_saving(inputs)
	return en_saving(inputs)
});