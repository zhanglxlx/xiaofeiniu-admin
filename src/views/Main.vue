<template>
  <div class="amin">
    欢迎回来：{{$store.state.adminName}}
    <h1>This is an Main page</h1>
    <div> 左侧的导航菜单</div>
    <div>上方的提示栏</div>
    <div>
      <h3>右下角主体部分</h3>
      <router-view></router-view>
    </div>
  </div>
</template>