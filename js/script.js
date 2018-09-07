function showBlock1() {
	document.getElementById('Block1').classList.add("fade");
		document.getElementById('Block1').classList.remove("fadeOut");
};

function hideBlock1() {
	document.getElementById('Block1').classList.add("fadeOut");
		document.getElementById('Block1').classList.remove("fade");
};

function showBlock2() {
	document.getElementById('Block2').classList.add("fade");
		document.getElementById('Block2').classList.remove("fadeOut");
};

function hideBlock2() {
	document.getElementById('Block2').classList.add("fadeOut");
		document.getElementById('Block2').classList.remove("fade");
};

function showBlock3() {
	document.getElementById('Block3').classList.add("fade");
		document.getElementById('Block3').classList.remove("fadeOut");
};

function hideBlock3() {
	document.getElementById('Block3').classList.add("fadeOut");
		document.getElementById('Block3').classList.remove("fade");
};

function showBlock4() {
	document.getElementById('Block4').classList.add("fade");
		document.getElementById('Block4').classList.remove("fadeOut");
};

function hideBlock4() {
	document.getElementById('Block4').classList.add("fadeOut");
		document.getElementById('Block4').classList.remove("fade");
};

function addSvgContainer() {

	document.getElementsByClassName("container").setAttribute("id", "svg-container");

};





function Map() {

var svgContainer = document.querySelector('#svg-container');
var svgElem = document.querySelector('#svg-container svg');
var path = document.querySelectorAll('.line');
var svgWOrig;
var svgHOrig;
svgWOrig = svgElem.getAttribute('width');
svgHOrig = svgElem.getAttribute('height');
var minW = 320;

for(var i = 0; i < path.length; i++) {
	var length = path[i].getTotalLength();
	path[i].style.transition = path[i].style.WebkitTransition = 'none';
	path[i].style.strokeDasharray = length + ' ' + length;
	path[i].style.strokeDashoffset = length;
	path[i].getBoundingClientRect();
	path[i].style.transition = path[i].style.WebkitTransition = 'stroke-dashoffset 10s ease';
	path[i].style.strokeDashoffset = '0';
}

var svgCover = function() {

    // Find the current width and height of the viewport
    var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Resize the svg container to match the viewport
    svgContainer.style.width = winWidth + 'px';
    svgContainer.style.height = winHeight + 'px';

    // Find the largest scale factor of horizontal/vertical
    var scaleH = winWidth / svgWOrig;
    var scaleV = winHeight / svgHOrig;
    var scale = scaleH > scaleV ? scaleH : scaleV;

    // Don't allow scaled width to be less than min width
    if (scale * svgWOrig < minW) {
        scale = minW / svgWOrig;
    }

    // Scale the svg
    var svgNewWidth = scale * svgWOrig;
    var svgNewHeight = scale * svgHOrig;
    svgElem.style.width = svgNewWidth + 'px';
    svgElem.style.height = svgNewHeight + 'px';

    // Align to middle by scrolling within the container
    svgContainer.scrollLeft = (svgNewWidth - winWidth) / 2;
    svgContainer.scrollTop = (svgNewHeight - winHeight) / 2;
  
};

svgCover();

window.addEventListener('resize', svgCover);


};

