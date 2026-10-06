/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Feature_UploadsInputs */

const zh_auth_feature_uploads = /** @type {(inputs: Auth_Feature_UploadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`即时资产上传 & 高保真媒体播放器`)
};

const en_auth_feature_uploads = /** @type {(inputs: Auth_Feature_UploadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instant asset uploads & high-fidelity media players`)
};

/**
* | output |
* | --- |
* | "Instant asset uploads & high-fidelity media players" |
*
* @param {Auth_Feature_UploadsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_feature_uploads = /** @type {((inputs?: Auth_Feature_UploadsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Feature_UploadsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_auth_feature_uploads(inputs)
	return en_auth_feature_uploads(inputs)
});