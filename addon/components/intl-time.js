import IntlComponent from './main';

var FormatTimeComponent = IntlComponent.extend({
	tagName:           'intl-time',
	instrumentDisplay: '{{intl-time}}',

	renderer: function (intl, props, options) {
		return intl.formatTime(props.value, options);
	}
});

FormatTimeComponent.reopenClass({
	formatOptions: [
		'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
		'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
		'timeZoneName'
	]
});

export default FormatTimeComponent;