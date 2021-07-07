<template>
    <div :data-name="weapon.name" class="skills-wrapper q-mb-lg">

            <div  class="skill-tree" v-for="(tree,tree_index) in weapon.trees" :key="tree.id">

              <p class="text-center text-h5 q-mb-none">{{tree.name_en}} </p>
              <p class="text-center text-caption ">{{tree.name}}</p>



              <div :ref="`row${row_index+1}tree${tree_index}`" class="skill-tree__row " v-for="(row,row_index) in 6">
                <div v-if="!item.is_empty"
                     @mouseenter="is_hover=true"
                     @click="item.is_can_check ? checkItem(tree_index,item.id) : null"
                     class="skill-tree__item"
                     :class="[
                     item.is_active_skill ? 'active-skill':'',
                     item.is_parent ? 'skill-is-parent':'',
                     item.is_has_parent ? 'skill-has-parent':'',
                     item.is_checked ? 'skill-is-checked':'item-disabled',
                     item.is_can_check ? 'skill-is-can-check':'',
                     item.is_ultimate ? 'skill-is-ultimate':'',
                     item.is_has_left_parent ? 'skill-is-has-left-parent':'',

                     ]"
                     v-for="(item,item_index) in _.orderBy(tree.skills.filter(x=>x.row===row_index+1), ['col'],['asc'])"
                     :key="item_index">
                  <img :src="img_url+item.image"/>

                  <q-tooltip
                    transition-show="scale"
                    transition-hide="scale"
                    :content-style="{ background: '#000',border:'1px dashed #fff'}"
                  >
                    <p class="text-center text-body2 text-bold">{{item.name_en}}</p>
                    <p style="max-width: 350px" class="text-center text-body2">{{item.description}}</p>
                  </q-tooltip>
                </div>
                <div v-else class=""></div>


              </div>
            </div>


    </div>
</template>
<script>
export default {
  props: ['weapon'],
  data() {
    return {
      img_url:process.env.API,
    }
  }
}
</script>
