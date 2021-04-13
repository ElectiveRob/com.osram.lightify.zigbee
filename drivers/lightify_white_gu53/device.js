'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class LightifyWhiteZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'MR16 TW OSRAM': {
				approximation: {
					usageOff: 0.5,
					usageOn: 5,
				},
			},
		};
	}
}

module.exports = LightifyWhiteZigBee;