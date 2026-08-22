/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ReviewerInputs */

const zh_reviewer = /** @type {(inputs: ReviewerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评审员`)
};

const en_reviewer = /** @type {(inputs: ReviewerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviewer`)
};

/**
* | output |
* | --- |
* | "Reviewer" |
*
* @param {ReviewerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const reviewer = /** @type {((inputs?: ReviewerInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ReviewerInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_reviewer(inputs)
	return en_reviewer(inputs)
});