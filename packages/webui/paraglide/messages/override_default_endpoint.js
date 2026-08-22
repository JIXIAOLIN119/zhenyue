/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Override_Default_EndpointInputs */

const zh_override_default_endpoint = /** @type {(inputs: Override_Default_EndpointInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`覆盖默认端点。`)
};

const en_override_default_endpoint = /** @type {(inputs: Override_Default_EndpointInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Override the default endpoint.`)
};

/**
* | output |
* | --- |
* | "Override the default endpoint." |
*
* @param {Override_Default_EndpointInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const override_default_endpoint = /** @type {((inputs?: Override_Default_EndpointInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Override_Default_EndpointInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_override_default_endpoint(inputs)
	return en_override_default_endpoint(inputs)
});