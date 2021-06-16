import Vue from 'vue';
import { CRS,latLng,latLngBounds,extend,Transformation } from "leaflet";
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.prototype.$crs = CRS
Vue.prototype.$latLng = latLng
Vue.prototype.$latLngBounds = latLngBounds
Vue.prototype.$extend = extend
Vue.prototype.$Transformation = Transformation
