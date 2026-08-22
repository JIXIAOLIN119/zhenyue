/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Recently_Deleted_NoticeInputs */

const zh_recently_deleted_notice = /** @type {(inputs: Recently_Deleted_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目将在 30 天后自动删除。`)
};

const en_recently_deleted_notice = /** @type {(inputs: Recently_Deleted_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Items are automatically deleted after 30 days.`)
};

/**
* | output |
* | --- |
* | "Items are automatically deleted after 30 days." |
*
* @param {Recently_Deleted_NoticeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const recently_deleted_notice = /** @type {((inputs?: Recently_Deleted_NoticeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recently_Deleted_NoticeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_recently_deleted_notice(inputs)
	return en_recently_deleted_notice(inputs)
});