/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Status_UpdatesInputs */

const zh_status_updates = /** @type {(inputs: Status_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态更新`)
};

const en_status_updates = /** @type {(inputs: Status_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status Updates`)
};

/**
* | output |
* | --- |
* | "Status Updates" |
*
* @param {Status_UpdatesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const status_updates = /** @type {((inputs?: Status_UpdatesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_UpdatesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_status_updates(inputs)
	return en_status_updates(inputs)
});