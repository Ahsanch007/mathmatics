function loadGeogebraApplet(e){var t=e.getElementsByClassName("ggb-applet-container")[0],a=e.getElementsByClassName("ggb-base-64-data")[0],n=JSON.parse(a.dataset.parameters),o=new GGBApplet(n,"5.0");o.setHTML5Codebase("/GeoGebra/HTML5/5.0/web3d/"),o.inject(t.id)}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".embedded-content-geogebra-file").forEach(loadGeogebraApplet)});