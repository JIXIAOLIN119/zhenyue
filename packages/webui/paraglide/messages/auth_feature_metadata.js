/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Feature_MetadataInputs */

const zh_auth_feature_metadata = /** @type {(inputs: Auth_Feature_MetadataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义元数据模式 & 画布标注审阅`)
};

const en_auth_feature_metadata = /** @type {(inputs: Auth_Feature_MetadataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom metadata schemas & drawing canvas reviews`)
};

/**
* | output |
* | --- |
* | "Custom metadata schemas & drawing canvas reviews" |
*
* @param {Auth_Feature_MetadataInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_feature_metadata = /** @type {((inputs?: Auth_Feature_MetadataInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Feature_MetadataInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_auth_feature_metadata(inputs)
	return en_auth_feature_metadata(inputs)
});