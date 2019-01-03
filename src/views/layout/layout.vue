<template>
  <div>
    <el-container>
      <el-header>
        <layoutTopHeader />
      </el-header>
      <el-main>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>
              <router-view/>
            </el-main>
          </el-container>
        </el-container>
      </el-main>
    </el-container>
    
  </div>
</template>

<script>
import layoutTopHeader from "./components/layoutTopHeader";
export default {
  name: "layout",
  components: {
    layoutTopHeader
  }
};
</script>

<style>
</style>
