<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col>
          <login></login>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import login from "@/views/login/index.vue";
export default {
  name: "Main",
  components: {
    login,
  },
};
</script>
