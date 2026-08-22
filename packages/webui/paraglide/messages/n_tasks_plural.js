/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} N_Tasks_PluralInputs */

const zh_n_tasks_plural = /** @type {(inputs: N_Tasks_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个任务`)
};

const en_n_tasks_plural = /** @type {(inputs: N_Tasks_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} tasks`)
};

/**
* | output |
* | --- |
* | "{count} tasks" |
*
* @param {N_Tasks_PluralInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_tasks_plural = /** @type {((inputs: N_Tasks_PluralInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<N_Tasks_PluralInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_n_tasks_plural(inputs)
	return en_n_tasks_plural(inputs)
});