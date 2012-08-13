var chartMap = {};
var lastChart;
function BitmapChart( targetDivId, dataProvider, histogram, pixelRenderFunction ) {

	chartMap[ targetDivId ] = this; 
	
	this.borderSize = 30;
	this.segments = 10;
	this.renderTime = 0;
	
	this.dataProvider = dataProvider;
	
	this.targetDivId = targetDivId;
	this.targetDiv = $( "#"+this.targetDivId );
	
	this.mouseLabel = $( "<div id='mouseLabel' style='position:absolute; text-shadow: 2px 2px 2px #FFF; color:#000'></div>" )
	this.selectionDiv = $( "<div id='selection' style='position:absolute; background:red; opacity:0.4; '></div>" )
	this.isSelecting = false;
	
	$("body").append(this.mouseLabel);
	$("body").append(this.selectionDiv);
	
	if(document.ontouchmove === undefined){
		this.targetDiv.mousemove( this.mouseMoveHandler );
		this.targetDiv.mouseover( this.mouseOverHandler );
		this.targetDiv.mouseout( this.mouseOutHandler );
		this.targetDiv.mousedown( this.mouseDownHandler );
	
		$("body").mouseup( this.mouseUpHandler );
		$("body").mousemove( this.bodyMouseMoveHandler );
	}else{
		$("body")[0].ontouchstart = this.mouseDownHandler;
		$("body")[0].ontouchend = this.mouseUpHandler;
		$("body")[0].ontouchmove = this.bodyMouseMoveHandler;
	}
	
	$(window).resize( this.resize );
	
   if ( window.orientation != undefined )
     window.onorientationchange = this.resize;
	
	
	this.histogram = histogram;
	
	if (pixelRenderFunction != undefined && pixelRenderFunction != null)
		this.pixelRenderFunction = pixelRenderFunction;
	else
		this.pixelRenderFunction = drawSinglePixel;
	
	this.horizontalAttribute = "x";
	this.horizontalMin = 0;
	this.horizontalMax = 100;
	this._horizontalMin = undefined;
	this._horizontalMax = undefined;
			
	this.verticalAttribute = "y";
	this.verticalMin = 0;
	this.verticalMax = 100;
	this._verticalMin = undefined;
	this._verticalMax = undefined;
	
	this.mouseDownX = 0;
	this.mouseDownY = 0;
	
	lastChart = this;
	this.resize();
}

BitmapChart.prototype.reset = function( event ) {
	this.horizontalMin = 0;
	this.horizontalMax = 100;
	this._horizontalMin = undefined;
	this._horizontalMax = undefined;
			
	this.verticalMin = 0;
	this.verticalMax = 100;
	this._verticalMin = undefined;
	this._verticalMax = undefined;
	
	
	lastChart = this;
	this.resize();
}

BitmapChart.prototype.resize = function( event ) {
	var chart = lastChart;
	chart.invalidateLayout();
}

BitmapChart.prototype.invalidateLayout = function( event ) {
	//log ("invalid");
	var chart = lastChart;
	if ( chart.invalidationTimeout )
		clearTimeout( chart.invalidationTimeout );
	chart.invalidationTimeout = setTimeout( chart.validateLayout, 100 );
}

BitmapChart.prototype.validateLayout = function( event ) {
	//log("valid");
	var chart = lastChart;
	
	if (chart.canvas)
		chart.canvas.remove();
	chart.canvas = $( "<canvas width='" + chart.targetDiv.width() + "' height='" + chart.targetDiv.height() + "' />" );
	chart.targetDiv.append( chart.canvas );
	
	chart.render();
}

BitmapChart.prototype.getHorizontalPixelValue = function( input ) {
	
	var relative = (input - this.borderSize)/(this.targetDiv.width()-2*this.borderSize);
	return (relative * (this._horizontalMax - this._horizontalMin)) + this._horizontalMin;
}
			
BitmapChart.prototype.getVerticalPixelValue = function( input ) {
	var relative = 1-((input - this.borderSize)/(this.targetDiv.height()-2*this.borderSize));
	return (relative * (this._verticalMax - this._verticalMin)) + this._verticalMin;
}

BitmapChart.prototype.width = function() {
	return this.targetDiv.width();	
}

BitmapChart.prototype.height = function() {
	return this.targetDiv.height();	
}



BitmapChart.prototype.render = function() {
	this.renderTime = new Date().getTime();
	//log( this );
	var i = 0;
	
	var w = this.targetDiv.width();
	var h = this.targetDiv.height();
	var chartW = w - 2*this.borderSize;
	var chartH = h - 2*this.borderSize;
	
	var ctx = this.canvas[0].getContext("2d");  
	
	ctx.fillStyle = "rgba(255,255,255,255)";  
	ctx.fillRect (0, 0, w, h);
 
 	var imageData = ctx.getImageData(0, 0, w, h);
	
	var histoMapX = {};
	var histoMapY = {};
	
	if ( isNaN( this._horizontalMax ) )
	{	
		this._horizontalMin = this.horizontalMin;
		this._horizontalMax = this.horizontalMax;
		this._verticalMin = this.verticalMin;
		this._verticalMax = this.verticalMax;
	}

	var horizontalDiff = this._horizontalMax - this._horizontalMin;
	var verticalDiff = this._verticalMax - this._verticalMin;
	
	var _x;
	var _y;
	var o;
	
	//render each data point 
	for (var i=0; i < this.dataProvider.length; i++)
	{  
		o = this.dataProvider[i];
		_x = (o[this.horizontalAttribute] - this._horizontalMin) / horizontalDiff;
		_y = (o[this.verticalAttribute] - this._verticalMin) / verticalDiff;
		
		_x = parseInt( this.borderSize+(_x * chartW) );
		_y = parseInt( this.borderSize+(chartH-(_y * chartH)) );
		
		if ( _x > this.borderSize && _x < w - this.borderSize &&
			_y > this.borderSize && _y < h - this.borderSize)
		{
			if ( this.histogram )
			{
				if ( histoMapX [ _x.toString() ] == null )
					histoMapX [ _x.toString() ] = 1;
				else
					histoMapX [ _x.toString() ] ++;
				
				if ( histoMapY [ _y.toString() ] == null )
					histoMapY [ _y.toString() ] = 1;
				else
					histoMapY [ _y.toString() ] ++;
			}
			
			this.pixelRenderFunction( _x, _y, o, imageData );
		}
	}
	
	if ( this.histogram )
	{
		var maxX = 0;
		var maxY = 0;
		var relative = 0;
		
		for ( var key in histoMapX ) 
		{
			maxX = Math.max( maxX, histoMapX[key] );
		}
		
		for ( key in histoMapY ) 
		{
			maxY = Math.max( maxY, histoMapY[key]);
		}
		
		
		for ( key in histoMapX ) 
		{
			_x = parseFloat( key );
			relative = (histoMapX[key]/maxX) * (this.borderSize-1);
			
			for ( var z = this.borderSize-1; z > (this.borderSize-relative); z -- )
			{
				this.setPixel( imageData, _x, z, 0,0,0xFF,0xFF );
			}
		}
		
		for ( key in histoMapY ) 
		{
			_y = parseFloat( key );
			relative = (histoMapY[key]/maxY) * (this.borderSize-1);
			
			for ( z = 0; z < relative; z ++ )
			{
				this.setPixel( imageData, w-(this.borderSize-1) + z, _y, 0,0,0xFF,0xFF );
			}
		}
	}
	
	var interval = chartW/this.segments;
	//render verical line overlays
	for ( i = this.borderSize; i<=w-(this.borderSize-2); i += interval )
	{
		for ( var j = this.borderSize; j < h-this.borderSize; j ++ )
		{
			this.setPixel( imageData, Math.round(i), j, 0,0,0,0xFF );
		}
	}
	
	//render horizontal line overlays
	interval = chartH/this.segments;
	for ( var i = this.borderSize; i<=h-(this.borderSize-2); i += interval )
	{
		for ( var j = this.borderSize; j < w-this.borderSize; j ++ )
		{
			this.setPixel( imageData, j, Math.round(i), 0,0,0,0xFF );
		}
	} 
	
	ctx.putImageData(imageData, 0, 0); 
	
	var label;
	ctx.fillStyle = "black";
	
	
	interval = chartW/this.segments;
	var labelCount = 0;
	var labelIncrement = horizontalDiff/this.segments;
	
	for ( i = this.borderSize; i<=w-(this.borderSize-2); i += interval )
	{
		label=(this._horizontalMin + (labelCount * labelIncrement )).toFixed(2);
		_x = i;
		_y = h-this.borderSize/2;
		
		ctx.fillText( label, _x, _y );
		labelCount++;
	}
	
	interval = chartH/this.segments;
	labelIncrement = verticalDiff/this.segments;
	labelCount = 0;
	
	for ( i = this.borderSize; i<=h-(this.borderSize-2); i += interval )
	{
		label=(this._verticalMin + (labelCount * labelIncrement )).toFixed(2);
		_x = 0;
		_y = h-i;
		
		ctx.fillText( label, _x, _y );
		labelCount++;
	}
	
	
	this.renderTime = new Date().getTime() - this.renderTime;
	//(this.renderTime);
}


BitmapChart.prototype.setPixel = function(imageData, x, y, r, g, b, a) {
	//log( x + "," + y );
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}




function drawSinglePixel( x, y, data, imageData )
{
	BitmapChart.prototype.setPixel(imageData, x, y, 0, 0, 0xFF, 0xFF) 
}

function drawCross( x, y, data, imageData )
{
	BitmapChart.prototype.setPixel(imageData, x, y, 0, 0, 0xFF, 0xFF);
	BitmapChart.prototype.setPixel(imageData, x-1, y, 0, 0, 0xFF, 0xFF);
	BitmapChart.prototype.setPixel(imageData, x+1, y, 0, 0, 0xFF, 0xFF);
	BitmapChart.prototype.setPixel(imageData, x, y-1, 0, 0, 0xFF, 0xFF);
	BitmapChart.prototype.setPixel(imageData, x, y+1, 0, 0, 0xFF, 0xFF);
}

BitmapChart.prototype.mouseMoveHandler = function(event) {

	var chart = chartMap[ this.id ]; 
	
	var mouseLabel = $('#mouseLabel');
	//log( mouseLabel );
	if ( mouseLabel.parent() != null )
		$("body").append( mouseLabel );

	mouseLabel.css( "left", event.pageX+20 );
	mouseLabel.css( "top", event.pageY+20 );
	
	if ( event.layerX > chart.borderSize && event.layerX < chart.targetDiv.width() - chart.borderSize &&
		event.layerY > chart.borderSize && event.layerY < chart.targetDiv.height() - chart.borderSize)
	{
		mouseLabel.fadeIn();
		mouseLabel.text( chart.getHorizontalPixelValue( event.layerX ).toFixed(2) + ", " + chart.getVerticalPixelValue( event.layerY ).toFixed(2) );
	}
	else
		mouseLabel.stop(true, true).fadeOut();
	
}


BitmapChart.prototype.bodyMouseMoveHandler = function(event) {

	var chart = lastChart;
	if (chart) 	
		chart.updateSelection(event);
		
	
	if( !(document.ontouchmove === undefined))
		event.preventDefault();
}

BitmapChart.prototype.updateSelection = function(event) {

	if ( this.isSelecting )
	{	
		var evtTarget;
		
		if(document.ontouchmove === undefined)
			evtTarget = event;
		else
			evtTarget = event.touches[0];
			
		var _x = Math.min( this.mouseDownX, evtTarget.pageX - this.targetDiv.offset().left );
		var w = Math.max( this.mouseDownX, evtTarget.pageX - this.targetDiv.offset().left )-_x;
		
		var _y = Math.min( this.mouseDownY, evtTarget.pageY - this.targetDiv.offset().top );
		var h = Math.max( this.mouseDownY, evtTarget.pageY - this.targetDiv.offset().top )-_y;
		
		this.selectionDiv.offset({left:_x,top:_y});
		this.selectionDiv.width( w );
		this.selectionDiv.height( h );
	} 
}

BitmapChart.prototype.mouseOverHandler = function(event) {

	$('#mouseLabel').stop(true, true).fadeIn();
}

BitmapChart.prototype.mouseOutHandler = function(event) {

	$('#mouseLabel').stop(true, true).fadeOut();
}

BitmapChart.prototype.mouseDownHandler = function(event) {
	var evtTarget;
	
	if(document.ontouchmove === undefined)
		evtTarget = event;
	else
		evtTarget = event.touches[0];
		
	var chart = lastChart;
	chart.isSelecting = true;
	chart.mouseDownX = evtTarget.pageX;
	chart.mouseDownY = evtTarget.pageY;
	chart.updateSelection(event);
	chart.selectionDiv.stop(true, true).fadeIn();
	lastChart = chart;
}

BitmapChart.prototype.mouseUpHandler = function(event) {
try{
	var chart = lastChart;
	if ( chart && chart.isSelecting )
	{
		var evtTarget;
		
	if(document.ontouchmove === undefined)
			evtTarget = event;
		else
			evtTarget = event.changedTouches[0];
		
		chart.isSelecting = false;
		chart.selectionDiv.stop(true, true).fadeOut();
		chart.selectionDiv.offset({left:0,top:0});
		chart.selectionDiv.width( 0 );
		chart.selectionDiv.height( 0 );
		
		var h1 = Math.min( chart.mouseDownX, evtTarget.pageX );
		var h2 = Math.max( chart.mouseDownX, evtTarget.pageX );
		
		var v1 = Math.max( chart.mouseDownY, evtTarget.pageY );
		var v2 = Math.min( chart.mouseDownY, evtTarget.pageY );
		
		var newHMin = chart.getHorizontalPixelValue( h1 );
		var newHMax = chart.getHorizontalPixelValue( h2 );
		
		var newVMin = chart.getVerticalPixelValue( v1 );
		var newVMax = chart.getVerticalPixelValue( v2 );
		
		chart._horizontalMin = newHMin;
		chart._horizontalMax = newHMax;
			
		chart._verticalMin = newVMin;
		chart._verticalMax = newVMax;
		
		chart.render();
	}
}catch(e){alert(e)}
}



function log( target ) {

	try {
		console.log( target )
	}
	catch ( e )
	{
		//do nothing for now	
	}
	
}
