/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} When_You_Upload_AssetsInputs */

const zh_when_you_upload_assets = /** @type {(inputs: When_You_Upload_AssetsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当你上传素材时`)
};

const en_when_you_upload_assets = /** @type {(inputs: When_You_Upload_AssetsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When you upload assets`)
};

/**
* | output |
* | --- |
* | "When you upload assets" |
*
* @param {When_You_Upload_AssetsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const when_you_upload_assets = /** @type {((inputs?: When_You_Upload_AssetsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<When_You_Upload_AssetsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_when_you_upload_assets(inputs)
	return en_when_you_upload_assets(inputs)
});