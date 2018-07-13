<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <menu-item name="1">
        <Icon type="ios-paper"></Icon>
        内容管理
      </menu-item>
      <menu-item name="2">
        <Icon type="ios-people"></Icon>
        用户管理
      </menu-item>
      <submenu name="3">
        <template slot="title">
          <Icon type="stats-bars"></Icon>
          统计分析
        </template>
        <menu-group title="使用">
          <menu-item name="3-1">新增和启动</menu-item>
          <menu-item name="3-2">活跃分析</menu-item>
          <menu-item name="3-3">时段分析</menu-item>
        </menu-group>
        <menu-group title="留存">
          <menu-item name="3-4">用户留存</menu-item>
          <menu-item name="3-5">流失用户</menu-item>
        </menu-group>
      </submenu>
      <menu-item name="4">
        <Icon type="settings"></Icon>
        综合设置
      </menu-item>

      <Badge dot>
        <Avatar shape="square" icon="person" />
      </Badge>

    </Menu>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>



  </div>
</template>
<script>
export default {
  data() {
    return {
      theme1: "dark"
    };
  }
};
</script>
