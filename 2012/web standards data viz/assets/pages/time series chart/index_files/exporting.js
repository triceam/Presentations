/*
 Highcharts JS v2.2.5 (2012-06-08)
 Exporting module

 (c) 2010-2011 Torstein H?nsi

 License: www.highcharts.com/license
*/
((() => {
 function x(a){for(var b=a.length;b--;)typeof a[b]==="number"&&(a[b]=Math.round(a[b])-0.5);return a}
 var g=Highcharts;
 var y=g.Chart;
 var z=g.addEvent;
 var B=g.removeEvent;
 var r=g.createElement;
 var u=g.discardElement;
 var t=g.css;
 var s=g.merge;
 var k=g.each;
 var n=g.extend;
 var C=Math.max;
 var h=document;
 var D=window;
 var A=h.documentElement.ontouchstart!==void 0;
 var v=g.getOptions();
 n(v.lang,{downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",exportButtonTitle:"Export to raster or vector image",
 printButtonTitle:"Print the chart"});v.navigation={menuStyle:{border:"1px solid #A0A0A0",background:"#FFFFFF"},menuItemStyle:{padding:"0 5px",background:"none",color:"#303030",fontSize:A?"14px":"11px"},menuItemHoverStyle:{background:"#4572A5",color:"#FFFFFF"},buttonOptions:{align:"right",backgroundColor:{linearGradient:[0,0,0,20],stops:[[0.4,"#F7F7F7"],[0.6,"#E3E3E3"]]},borderColor:"#B0B0B0",borderRadius:3,borderWidth:1,height:20,hoverBorderColor:"#909090",hoverSymbolFill:"#81A7CF",hoverSymbolStroke:"#4572A5",
 symbolFill:"#E0E0E0",symbolStroke:"#A0A0A0",symbolX:11.5,symbolY:10.5,verticalAlign:"top",width:24,y:10}};v.exporting={type:"image/png",url:"http://export.highcharts.com/",width:800,buttons:{exportButton:{symbol:"exportIcon",x:-10,symbolFill:"#A8BF77",hoverSymbolFill:"#768F3E",_id:"exportButton",_titleKey:"exportButtonTitle",menuItems:[{textKey:"downloadPNG",onclick() {this.exportChart()}},{textKey:"downloadJPEG",onclick() {this.exportChart({type:"image/jpeg"})}},{textKey:"downloadPDF",
 onclick() {this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick() {this.exportChart({type:"image/svg+xml"})}}]},printButton:{symbol:"printIcon",x:-36,symbolFill:"#B5C9DF",hoverSymbolFill:"#779ABF",_id:"printButton",_titleKey:"printButtonTitle",onclick() {this.print()}}}};n(y.prototype,{getSVG(a) {
  var b=this;
  var c;
  var d;
  var e;
  var f=s(b.options,a);
  if(!h.createElementNS)h.createElementNS=(a, b) => h.createElement(b);a=r("div",null,{position:"absolute",
  top:"-9999em",width:b.chartWidth+"px",height:b.chartHeight+"px"},h.body);n(f.chart,{renderTo:a,forExport:!0});f.exporting.enabled=!1;f.chart.plotBackgroundImage=null;f.series=[];k(b.series,a => {e=s(a.options,{animation:!1,showCheckbox:!1,visible:a.visible});if(!e.isInternal){if(e&&e.marker&&/^url\(/.test(e.marker.symbol))e.marker.symbol="circle";f.series.push(e)}});c=new Highcharts.Chart(f);k(["xAxis","yAxis"],a => {k(b[a],(b, d) => {
   var e=c[a][d];
   var f=b.getExtremes();
   var g=f.userMin;
   var f=f.userMax;
   (g!==void 0||f!==void 0)&&e.setExtremes(g,f,!0,!1)
  })});d=c.container.innerHTML;f=null;c.destroy();u(a);d=d.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/isTracker="[^"]+"/g,"").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ href=/g," xlink:href=").replace(/\n/," ").replace(/<\/svg>.*?$/,"</svg>").replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,
  "\u00ad").replace(/<IMG /g,"<image ").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/id=([^" >]+)/g,'id="$1"').replace(/class=([^" ]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,a => a.toLowerCase());d=d.replace(/(url\(#highcharts-[0-9]+)&quot;/g,"$1").replace(/&quot;/g,"'");d.match(/ xmlns="/g).length===2&&(d=d.replace(/xmlns="[^"]+"/,
  ""));return d
 },exportChart(a, b) {
  var c;
  var d=this.getSVG(s(this.options.exporting.chartOptions,b));
  var a=s(this.options.exporting,a);
  c=r("form",{method:"post",action:a.url,enctype:"multipart/form-data"},{display:"none"},h.body);k(["filename","type","width","svg"],b => {r("input",{type:"hidden",name:b,value:{filename:a.filename||"chart",type:a.type,width:a.width,svg:d}[b]},null,c)});c.submit();u(c)
 },print() {
  var a=this;
  var b=a.container;
  var c=[];
  var d=b.parentNode;
  var e=h.body;
  var f=e.childNodes;
  if(!a.isPrinting)a.isPrinting=
  !0,k(f,(a, b) => {if(a.nodeType===1)c[b]=a.style.display,a.style.display="none"}),e.appendChild(b),D.print(),setTimeout(() => {d.appendChild(b);k(f,(a, b) => {if(a.nodeType===1)a.style.display=c[b]});a.isPrinting=!1},1E3)
 },contextMenu(a, b, c, d, e, f) {
  var i=this;
  var g=i.options.navigation;
  var h=g.menuItemStyle;
  var o=i.chartWidth;
  var p=i.chartHeight;
  var q="cache-"+a;
  var j=i[q];
  var l=C(e,f);
  var m;
  var w;
  if(!j)i[q]=j=r("div",{className:"highcharts-"+a},{position:"absolute",zIndex:1E3,padding:l+"px"},i.container),m=r("div",
  null,n({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},g.menuStyle),j),w=() => {t(j,{display:"none"})},z(j,"mouseleave",w),k(b,a => {if(a){var b=r("div",{onmouseover() {t(this,g.menuItemHoverStyle)},onmouseout() {t(this,h)},innerHTML:a.text||i.options.lang[a.textKey]},n({cursor:"pointer"},h),m);b[A?"ontouchstart":"onclick"]=function(...args) {w();a.onclick.apply(i,args)};i.exportDivElements.push(b)}}),i.exportDivElements.push(m,
  j),i.exportMenuWidth=j.offsetWidth,i.exportMenuHeight=j.offsetHeight;a={display:"block"};c+i.exportMenuWidth>o?a.right=o-c-e-l+"px":a.left=c-l+"px";d+f+i.exportMenuHeight>p?a.bottom=p-d-l+"px":a.top=d+f-l+"px";t(j,a)
 },addButton(a) {
  function b(){p.attr(l);o.attr(j)}
  var c=this;
  var d=c.renderer;
  var e=s(c.options.navigation.buttonOptions,a);
  var f=e.onclick;
  var g=e.menuItems;
  var h=e.width;
  var k=e.height;
  var o;
  var p;
  var q;
  var a=e.borderWidth;
  var j={stroke:e.borderColor};
  var l={stroke:e.symbolStroke,fill:e.symbolFill};
  var m=e.symbolSize||12;
  if(!c.exportDivElements)c.exportDivElements=
  [],c.exportSVGElements=[];e.enabled!==!1&&(o=d.rect(0,0,h,k,e.borderRadius,a).align(e,!0).attr(n({fill:e.backgroundColor,"stroke-width":a,zIndex:19},j)).add(),q=d.rect(0,0,h,k,0).align(e).attr({id:e._id,fill:"rgba(255, 255, 255, 0.001)",title:c.options.lang[e._titleKey],zIndex:21}).css({cursor:"pointer"}).on("mouseover",() => {p.attr({stroke:e.hoverSymbolStroke,fill:e.hoverSymbolFill});o.attr({stroke:e.hoverBorderColor})}).on("mouseout",b).on("click",b).add(),g&&(f=() => {b();var a=q.getBBox();
  c.contextMenu("export-menu",g,a.x,a.y,h,k)}),q.on("click",function(...args) {f.apply(c,args)}),p=d.symbol(e.symbol,e.symbolX-m/2,e.symbolY-m/2,m,m).align(e,!0).attr(n(l,{"stroke-width":e.symbolStrokeWidth||1,zIndex:20})).add(),c.exportSVGElements.push(o,q,p))
 },destroyExport() {
  var a;
  var b;
  for(a=0;a<this.exportSVGElements.length;a++)b=this.exportSVGElements[a],b.onclick=b.ontouchstart=null,this.exportSVGElements[a]=b.destroy();for(a=0;a<this.exportDivElements.length;a++)b=this.exportDivElements[a],
  B(b,"mouseleave"),this.exportDivElements[a]=b.onmouseout=b.onmouseover=b.ontouchstart=b.onclick=null,u(b)
 }});g.Renderer.prototype.symbols.exportIcon=(a, b, c, d) => x(["M",a,b+c,"L",a+c,b+d,a+c,b+d*0.8,a,b+d*0.8,"Z","M",a+c*0.5,b+d*0.8,"L",a+c*0.8,b+d*0.4,a+c*0.4,b+d*0.4,a+c*0.4,b,a+c*0.6,b,a+c*0.6,b+d*0.4,a+c*0.2,b+d*0.4,"Z"]);g.Renderer.prototype.symbols.printIcon=(a, b, c, d) => x(["M",a,b+d*0.7,"L",a+c,b+d*0.7,a+c,b+d*0.4,a,b+d*0.4,"Z","M",a+c*0.2,b+d*0.4,"L",a+c*0.2,b,a+c*
 0.8,b,a+c*0.8,b+d*0.4,"Z","M",a+c*0.2,b+d*0.7,"L",a,b+d,a+c,b+d,a+c*0.8,b+d*0.7,"Z"]);y.prototype.callbacks.push(a => {
  var b;
  var c=a.options.exporting;
  var d=c.buttons;
  if(c.enabled!==!1){for(b in d)a.addButton(d[b]);z(a,"destroy",a.destroyExport)}
 })
}))();
