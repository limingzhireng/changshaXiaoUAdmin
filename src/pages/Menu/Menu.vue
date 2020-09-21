<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 添加按钮 -->
        <el-button type="primary"
                   @click="goAdd">添加</el-button>
        <!-- 表格 -->
        <el-table :data="tableData"
                  style="width: 100%;margin-bottom: 20px;"
                  row-key="id"
                  border
                  default-expand-all
                  :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column prop="id"
                             label="菜单编号"
                             width="180">
            </el-table-column>
            <el-table-column prop="title"
                             label="菜单名称"
                             width="180">
            </el-table-column>
            <el-table-column prop="icon"
                             label="菜单图标">
            </el-table-column>
            <el-table-column prop="url"
                             label="菜单地址">
            </el-table-column>
            <el-table-column label="状态">
                <template slot-scope="scope">
                    <el-tag>{{scope.row.status | statusFormat}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini"
                               @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-popconfirm title="你确定要删除吗？"
                                   @onConfirm="del(scope.row.id)">
                        <el-button size="mini"
                                   type="danger"
                                   slot="reference">删除</el-button>
                    </el-popconfirm>

                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
export default {
    data () {
        return {

            title: "",
            tableData: []
        }
    },
    mounted () {
        this.getList()

    },


    methods: {
        getList () {
            this.$http.get("/menulist", { istree: true }).then(res => {
                this.tableData = res.data.list
            })
        },
        handleEdit (index, row) {
            console.log(index, row);
            this.$router.push("/menu/edit? id=" + row.id)
        },
        handleDelete (index, row) {
            console.log(index, row);
        },
        del (id) {
            console.log("整的要删除吗")
            this.$http.post("menudelete", { id }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.getList()
                    this.$message({
                        message: '恭喜你，删除成功',
                        type: 'success'
                    });
                }
            })
        },
        goAdd () {
            this.$router.push("/menu/add")
        }
    },

}
</script>

<style scoped>
</style>