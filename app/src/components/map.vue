<template>
    <!--地图实例需要控制的dom元素-->
    <div id="container">
    </div>
</template>
<script>
    export default {
        mounted(){
            var lot = 0;
            var lat = 0;
            var map = new BMap.Map('container'); // 创建地图实例

            map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
            map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用


            navigator.geolocation.watchPosition(function (e){
                lot = e.coords.longitude;
                lat = e.coords.latitude;

                var point = new BMap.Point(lot, lat); // 创建点坐标
                map.centerAndZoom(point, 15); // 创建点坐标(设置中心点, 缩放比)
                var marker = new BMap.Marker(point); // 创建标注
                marker.setAnimation(BMAP_ANIMATION_BOUNCE); // 跳动的动画
                map.addOverlay(marker); // 添加覆盖物
            },function (e){
                console.log(e.code);
            });
        }
    }
</script>
<style>
    /* 地图容器必须设置宽和高属性 */
    #container{
        width: 350px;height: 250px;
    }
</style>