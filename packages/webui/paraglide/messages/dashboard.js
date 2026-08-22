/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} DashboardInputs */

const zh_dashboard = /** @type {(inputs: DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仪表板`)
};

const en_dashboard = /** @type {(inputs: DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

/**
* | output |
* | --- |
* | "Dashboard" |
*
* @param {DashboardInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard = /** @type {((inputs?: DashboardInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<DashboardInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_dashboard(inputs)
	return en_dashboard(inputs)
});