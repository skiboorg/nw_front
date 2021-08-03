<template>
  <q-page style="overflow: hidden">
    <q-page-sticky style="z-index: 1000" position="top-left" :offset="[18, 18]">
      <q-btn @click="leftDrawerOpen = !leftDrawerOpen" fab :icon="leftDrawerOpen ? 'west': 'east'" color="primary" />
    </q-page-sticky>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      dark>
      <q-list  dark >
        <q-item >
          <q-item-section>
            <h1 class="q-mb-none text-h6 text-bold text-center">Карта New World</h1>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple >
          <q-item-section>
            <q-toggle
              v-model="is_poi_visible"
              label="Показывать точки интереса"
            />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple v-for="(type,index) in categoryTypes" :key="type.id">
          <q-item-section>
<!--            <q-toggle-->
<!--              v-model="type.is_visible"-->
<!--              @input="typeChange(index)"-->
<!--              :style="{color: type.marker_color}"-->
<!--              :label="`Показывать ${type.name.toLowerCase()}`"-->
<!--            />-->
            <q-toggle
              dense
              class="q-mb-sm q-px-md"
              :style="{color: type.marker_color}"
              @input="categoryChange(index)"
              v-for="(category,cat_index) in type.category"
              :key="category.id"
              v-model="category.is_visible"
              :label="`${category.name} (${category.name_en})`"
            />
          </q-item-section>


        </q-item>

        <q-separator/>


      </q-list>
    </q-drawer>
    <q-no-ssr>
      <l-map
        @click="addMarker"
        ref="map"
        :bounds="bounds"
        :zoom="10"
        :crs="crs"
        :attributionControl = "attributionControl"
        :zoomControl="!1"
        :preferCanvas="true"
        style="height: 100vh; width: 100vw;background: #000">
        <l-tile-layer
          :url="url"
          :tileSize='tileSize'
          :noWrap="noWrap"
          :min-zoom="minZoom"
          :max-zoom="maxZoom"

          :bounds="bounds"
        />
        <div class="">
          <l-marker
            v-if="is_poi_visible"
            :lat-lng="[poi.lat, poi.lng]"
            v-for="poi in pois"
            :key="poi.id"
          >
            <l-icon
              :icon-size="iconSize"
              :icon-url="poi.image"
            />
            <l-popup :content="`<b>${poi.name }</b><br>(${poi.name_en }) <br><br><b>${poi.description}</b><br>(${poi.description_en})<br><br>Уровень ${poi.level ? poi.level : '--'}`" />
          </l-marker>
        </div>

        <div v-if="type.is_visible" class="" v-for="type in categoryTypes" :key="type.id">
          <div v-if="category.is_visible" v-for="category in type.category" :key="category.id">
            <!--            <l-marker-->
            <!--              :lat-lng="[res.lat, res.lng]"-->
            <!--              v-for="(res,index) in category.resourses"-->
            <!--              :key="index">-->
            <!--              <l-icon-->
            <!--                :icon-size="iconSize"-->
            <!--                :icon-url="category.image"/>-->
            <!--              <l-popup :content="`<b>${category.name_en }</b><br>(${category.name }) <br>${res.description}`" />-->
            <!--            </l-marker>-->
            <v-marker-cluster :options="{maxClusterRadius:30,zoomToBoundsOnClick:false}">
              <l-circle-marker
                :lat-lng="[res.lat, res.lng]"
                v-for="(res,index) in category.resourses"
                :key="index"
                :color="type.marker_color"
                :radius="5"
              >
                <l-popup :content="`<b>${category.name_en }</b><br>${res.name}<br>${res.description}`" />
              </l-circle-marker>
              <!--              <l-marker v-for="(res,index) in category.resourses" :key="index" :lat-lng="[res.lat, res.lng]" >-->
              <!--                <l-icon-->
              <!--                :icon-size="iconSize"-->
              <!--               :icon-url="category.image"/>-->
              <!--                <l-popup :content="`<b>${category.name_en }</b><br>(${category.name }) <br>${res.description_en}`"></l-popup>-->
              <!--              </l-marker>-->
            </v-marker-cluster>
            <!--              <l-circle-marker-->
            <!--              :lat-lng="[res.lat, res.lng]"-->
            <!--                v-for="(res,index) in category.resourses"-->
            <!--                :key="index"-->
            <!--              :color="type.marker_color"-->
            <!--              :radius="6"-->
            <!--              >-->
            <!--                <l-popup :content="`${category.name }<br>(${category.name_en }) ${category.image}<br>${res.description}`" />-->
            <!--              </l-circle-marker>-->
          </div>

        </div>

      </l-map>
    </q-no-ssr>



  </q-page>


</template>

<script>

// import { LMap, LImageOverlay, LMarker, LPopup, LPolyline } from "vue2-leaflet";
import {mapActions, mapGetters} from "vuex";

let Vue2Leaflet = {}
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
let Vu2Cluster ={}

if (!process.env.SERVER) {
  //Vu2Cluster = require('vue2-leaflet-markercluster')
  Vue2Leaflet = require('vue2-leaflet')
}
export default {
  async preFetch ({store}) {
    if (store.state.data.poi.length === 0){
       await store.dispatch('data/fetchPoi')
       await store.dispatch('data/fetchResourses')
    }
  },
   meta: {
    title: 'Карта New World с ресурсами, интерактивная, на русском',
    // meta tags
    meta: {
      description: {name: 'description', content: 'Интерактивная карта нового мира с расположением ресурсов, которая поможет вам найти точки телепорта, животных и достопримечательности.'},
      ogTitle: {
        name: 'og:title',
        template(ogTitle) {
          return `Карта New World с ресурсами, интерактивная, на русском`
        }
      }
    }
  },
  components: {
    'l-tile-layer':Vue2Leaflet.LTileLayer,
    'l-marker':Vue2Leaflet.LMarker,
    'l-circle-marker':Vue2Leaflet.LCircleMarker,
    'l-popup':Vue2Leaflet.LPopup,
    'l-icon':Vue2Leaflet.LIcon,
    //'v-marker-cluster': Vu2Cluster.Vue2LeafletMarkerCluster

  },

  data() {
    return {
      tab:'map',
      is_poi_visible:true,
      leftDrawerOpen: true,
      iconSize: [54, 54],
      iconAnchor: [16, 37],
      url: `${process.env.API}/media/map/{z}/map_y{y}_x{x}.jpg`,

      zoom:{ position: "center" },
      minZoom:1,
      maxZoom:5,
      attributionControl: !1,
      zoomControl: !1,
      preferCanvas: !0,
      noWrap:!0,
      tileSize:1024,


      bounds: [[-5000,7000],[14336,14336]],
      //crs: !process.env.SERVER ? this.$crs.Simple : null,
      crs:
        !process.env.SERVER ?
          this.$extend({},this.$crs.Simple, { transformation: new this.$Transformation(1 / 16, 0, -1 / 16, 0) })
          :
          null,


    };
  },
  methods:{
    ...mapActions('data',['updateCategoryType']),
    addMarker(event){
      console.log('add',event.latlng)
    },
    typeChange(index){
      this.updateCategoryType({index,type:'typeChange'})
    },
    categoryChange(index){
      this.updateCategoryType({index,type:'categoryChange'})

    }
  },
  computed:{
    ...mapGetters('data',['pois','categoryTypes'])
  }

};
</script>
