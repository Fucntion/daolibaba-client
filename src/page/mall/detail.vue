
<template>
  <div>
      <head-box :goBack="true" quick="true"  >
         <!--<div class="share" slot="edit"><i class="iconfont icon-share"></i></div>-->
        <div slot="tab" class="tab">
          <router-link :to="'show'" class="tab-item" :class="{'active':activeIndx=='show'}">简介</router-link>
          <router-link :to="'info'" class="tab-item" :class="{'active':activeIndx=='info'}">详情</router-link>
           <router-link :to="'score'"  class="tab-item" :class="{'active':activeIndx=='score'}">评论</router-link>
        </div>
      </head-box>
    <transition name="router-fade" mode="out-in">
			<router-view></router-view>
		</transition>
  </div>
</template>

<script>
import headBox from '@/components/head'
import { mall } from "../../service/getData";


export default {
  data() {
    return {
      mall: {}
    };
  },

  components: {
    headBox
  },

  computed: {
    activeIndx(){
      var path = this.$route.path,rt='show';
      if(path.indexOf('info')>-1)rt='info'
      if(path.indexOf('score')>-1)rt='score'
      return rt
    }
  },
  mounted() {
    this.$nextTick(function() {});
  },
  created() {

  },
  methods: {

  }
};
</script>
<style lang='less' scoped>
@import "../../assets/style/base.less";
.thumb {
  width: 100%;
  height: 100%;
}
.icon-share{
  color: #999999;
}
.tab-item{
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 14px;
  display: inline-block;
  line-height: 44px;
  height: 44px;
  color: @grayFontColor;
  &.active{
    color: @defaultFontColor;
    border-bottom: 2px solid @activeColor;
  }
}
</style>
