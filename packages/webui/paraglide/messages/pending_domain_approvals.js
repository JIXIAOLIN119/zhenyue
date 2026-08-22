/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Pending_Domain_ApprovalsInputs */

const zh_pending_domain_approvals = /** @type {(inputs: Pending_Domain_ApprovalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待审核域名`)
};

const en_pending_domain_approvals = /** @type {(inputs: Pending_Domain_ApprovalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pending Domain Approvals`)
};

/**
* | output |
* | --- |
* | "Pending Domain Approvals" |
*
* @param {Pending_Domain_ApprovalsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const pending_domain_approvals = /** @type {((inputs?: Pending_Domain_ApprovalsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Pending_Domain_ApprovalsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_pending_domain_approvals(inputs)
	return en_pending_domain_approvals(inputs)
});