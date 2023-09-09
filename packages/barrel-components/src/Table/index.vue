<script setup lang="ts">
type TableSize = 'middle' | 'small' | 'large'

export interface Props {
  dataSource: any[]
  columns: []
  pagination?: boolean
  loading?: boolean
  size?: TableSize
}
const props = defineProps<Props>()

// defineProps({
//   dataSource: {
//     type: [],
//     default: []
//   },
//   columns: {
//     type: [],
//     default: []
//   },
//   pagination: {
//     type: Boolean,
//     default: false
//   },
//   loading: {
//     type: Boolean,
//     default: false
//   }
// })

const { dataSource, columns, loading } = props

// watch(
//   () => dataSource,
//   (val) => {
//     console.log(val)
//   },
//   { immediate: true }
// )
</script>

<template>
  <a-table
    :pagination="false"
    :scroll="{ x: 500 }"
    :data-source="props.dataSource"
    :columns="props.columns"
    :loading="props.loading"
  />
</template>

<style lang="scss" scoped>
:deep(.ant-table-thead > tr > th) {
  font-size: 11px;
  font-weight: 400;
  text-align: center;
}

:deep(.ant-table-tbody > tr > td) {
  font-size: 11px;
}
</style>
