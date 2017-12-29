$(document).ready(()=>{
	for (var i = 0; i <5; i++) {
			_section=$('<section>');
	_section.addClass("section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp");
	_header=$('<header>');
	_header.addClass('section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white');
	_header.attr('style',"background-image:url('https://i.gadgets360cdn.com/large/got_iron_throne_1502080444580.jpg?output-quality=80');background-position:50% 50%;background-repeat: no-repeat;background-size:cover;")
	_section.append(_header);
	$('#container').append(_section);
	}
})