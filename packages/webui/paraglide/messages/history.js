/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} HistoryInputs */

const zh_history = /** @type {(inputs: HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`历史记录`)
};

const en_history = /** @type {(inputs: HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`History`)
};

/**
* | output |
* | --- |
* | "History" |
*
* @param {HistoryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const history = /** @type {((inputs?: HistoryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<HistoryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_history(inputs)
	return en_history(inputs)
});