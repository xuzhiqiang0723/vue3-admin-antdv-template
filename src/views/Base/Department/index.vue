<script setup></script>
<template>
  <div>机构管理</div>
  <a-button type="primary" v-permission="['admin']">admin</a-button>
  <a-button type="primary" v-permission="['employee']">employee</a-button>
</template>
