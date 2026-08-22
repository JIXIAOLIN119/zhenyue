/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} N_Tasks_SingularInputs */

const zh_n_tasks_singular = /** @type {(inputs: N_Tasks_SingularInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个任务`)
};

const en_n_tasks_singular = /** @type {(inputs: N_Tasks_SingularInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} task`)
};

/**
* | output |
* | --- |
* | "{count} task" |
*
* @param {N_Tasks_SingularInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_tasks_singular = /** @type {((inputs: N_Tasks_SingularInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<N_Tasks_SingularInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_n_tasks_singular(inputs)
	return en_n_tasks_singular(inputs)
});