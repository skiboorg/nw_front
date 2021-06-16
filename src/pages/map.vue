<template>
  <div class="">
    <q-header elevated  class="bg-dark q-py-md">
      <q-toolbar >
        <q-btn
          flat
          dense
          round

          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Параметры карты <span class="text-caption">(версия карты 0.1)</span>
        </q-toolbar-title>
        <div class="container flex">


       <q-tabs :breakpoint="1000" dense v-model="tab" indicator-color="primary" class="gt-sm">

            <q-route-tab name="index" label="Главная" to="/"/>
            <q-route-tab name="news" label="Новости" to="/news"/>
            <q-route-tab name="guilds" label="Компании" to="/companies"/>
            <q-btn-dropdown  auto-close stretch flat label="Информация">
              <q-list class="bg-grey-9">
                <q-item clickable>
                  <q-item-section>
                    <router-link class="nav-link" to="/guides">Гайды</router-link>
                  </q-item-section>
                </q-item>
                <q-separator/>
                <q-item clickable>
                  <q-item-section>
                    <router-link class="nav-link" to="/faq">FAQ</router-link>
                  </q-item-section>
                </q-item>



              </q-list>
            </q-btn-dropdown>
            <q-route-tab name="calc" label="Калькулятор" to="/skills"/>
            <q-route-tab name="map" label="Карта" to="/map"/>
            <q-route-tab name="trade" label="Биржа" to="/trade"/>


          </q-tabs>
        </div>


      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"

      bordered
      dark
    >
      <q-list  dark >
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
            <q-toggle
              v-model="type.is_visible"
              @input="typeChange(index)"
              :style="{color: type.marker_color}"
              :label="`Показывать ${type.name.toLowerCase()}`"
            />
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
    <q-page class="flex flex-center">

      <q-no-ssr>
        <l-map
          ref="map"
          :bounds="bounds"
          :zoom="10"
          :crs="crs"

          :attributionControl = "attributionControl"
          :zoomControl="!1"
          preferCanvas

          style="height: 100vh; width: 100vw;background: #000"
        >
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
            <l-popup :content="poi.name_en" />
          </l-marker>
          </div>
          <div v-if="type.is_visible" class="" v-for="type in categoryTypes" :key="type.id">
            <div v-if="category.is_visible" v-for="category in type.category" :key="category.id">
<!--               <l-marker-->
<!--            :lat-lng="[res.lat, res.lng]"-->
<!--            v-for="(res,index) in category.resourses"-->
<!--            :key="index"-->
<!--          >-->
<!--            <l-icon-->
<!--              :icon-size="iconSize"-->
<!--              :icon-url="category.image"-->
<!--            />-->

<!--          </l-marker>-->
              <l-circle-marker
              :lat-lng="[res.lat, res.lng]"
                v-for="(res,index) in category.resourses"
                :key="index"
              :color="type.marker_color"
              :radius="6"
              >
                <l-popup :content="`${category.name }<br>(${category.name_en })<br>${res.description}`" />
              </l-circle-marker>
            </div>

          </div>

        </l-map>
      </q-no-ssr>

    </q-page>
  </div>

</template>

<script>

// import { LMap, LImageOverlay, LMarker, LPopup, LPolyline } from "vue2-leaflet";
import {mapActions, mapGetters} from "vuex";

let Vue2Leaflet = {}
import "leaflet/dist/leaflet.css";
if (!process.env.SERVER) {
  Vue2Leaflet = require('vue2-leaflet')

}
export default {
  components: {
    'l-tile-layer':Vue2Leaflet.LTileLayer,
    'l-marker':Vue2Leaflet.LMarker,
    'l-circle-marker':Vue2Leaflet.LCircleMarker,
    'l-popup':Vue2Leaflet.LPopup,
    'l-icon':Vue2Leaflet.LIcon

  },

  data() {
    return {
      tab:'map',
      leftDrawerOpen: false,
      is_poi_visible:false,
      iconSize: [54, 54],
      iconAnchor: [16, 37],
      pois:[{
        "id": 5,
        "name": null,
        "name_en": "The Abberation",
        "name_slug": "the-abberation",
        "description": "Level 35 Named",
        "image": "http://localhost:8000/media/images/poi/claim_compass.png",
        "level": 4,
        "x_game": null,
        "x_map": "353.40625000",
        "y_game": null,
        "y_map": "674.37500000",
        "lat": "5654.50000000",
        "lng": "10790.00000000"
      },],
      categoryTypes:[

      ],
      url: "https://newworldfans.com/tiles/{z}/map_y{y}_x{x}.jpg",

      zoom:{ position: "topright" },
      minZoom:0,
      maxZoom:6,
      attributionControl: !1,
      zoomControl: !1,
      preferCanvas: !0,
      noWrap:!0,
      tileSize:1024,


      bounds: [[0,0],[14336,14336]],
      //crs: !process.env.SERVER ? this.$crs.Simple : null,
      crs:
        !process.env.SERVER ?
          this.$extend({},this.$crs.Simple, { transformation: new this.$Transformation(1 / 16, 0, -1 / 16, 0) })
          :
          null,


    };
  },
  async mounted() {
    const response = await this.$api.get('/api/map/poi')
    this.pois = response.data
    const response_types = await this.$api.get('/api/map/resourse')
    this.categoryTypes = response_types.data
    console.log(this.pois)

  },
  methods:{
    typeChange(index){
      if(!this.categoryTypes[index].is_visible){
        for (let  x of this.categoryTypes[index].category){
        x.is_visible = false
      }
      }

    },
    categoryChange(index){
      this.categoryTypes[index].is_visible = true
    }
  },
  // computed:{
  //   ...mapGetters('componentState',['is_poi_visible']),
  // }

};
</script>
