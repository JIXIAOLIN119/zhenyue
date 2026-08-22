/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Member_RemovedInputs */

const zh_member_removed = /** @type {(inputs: Member_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成员已移除`)
};

const en_member_removed = /** @type {(inputs: Member_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Member removed`)
};

/**
* | output |
* | --- |
* | "Member removed" |
*
* @param {Member_RemovedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const member_removed = /** @type {((inputs?: Member_RemovedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Member_RemovedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_member_removed(inputs)
	return en_member_removed(inputs)
});