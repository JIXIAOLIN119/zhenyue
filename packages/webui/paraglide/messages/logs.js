/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} LogsInputs */

const zh_logs = /** @type {(inputs: LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日志`)
};

const en_logs = /** @type {(inputs: LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logs`)
};

/**
* | output |
* | --- |
* | "Logs" |
*
* @param {LogsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const logs = /** @type {((inputs?: LogsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<LogsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_logs(inputs)
	return en_logs(inputs)
});