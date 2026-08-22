/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} When_Someone_Changes_StatusInputs */

const zh_when_someone_changes_status = /** @type {(inputs: When_Someone_Changes_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当有人更改素材的状态时`)
};

const en_when_someone_changes_status = /** @type {(inputs: When_Someone_Changes_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When someone changes an asset's status`)
};

/**
* | output |
* | --- |
* | "When someone changes an asset's status" |
*
* @param {When_Someone_Changes_StatusInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const when_someone_changes_status = /** @type {((inputs?: When_Someone_Changes_StatusInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<When_Someone_Changes_StatusInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_when_someone_changes_status(inputs)
	return en_when_someone_changes_status(inputs)
});