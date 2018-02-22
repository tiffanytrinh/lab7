'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */


$('.likeBtn').click(initializePage);
$('.btn btn-default likeBtn').click(initializePage);

function initializePage(event) {
	console.log('like button clicked');
	ga('send', 'event', 'like', 'click');
}
