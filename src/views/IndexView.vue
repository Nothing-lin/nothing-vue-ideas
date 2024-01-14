<template>
    <div class="index-container">
        <el-container class="main-container">
            <el-header class="main-header">

                <el-row :gutter="20">
                    <el-col :span="16" class="header-logo">
                        <h1>NothingIdeas思考流程</h1>
                    </el-col>

                    <el-col :span="8" class="adddel-container">
                        <el-button type="success">新增</el-button>
                        <el-button type="danger">删除</el-button>
                    </el-col>
                </el-row>
            </el-header>

            <el-container>
                <el-aside width="100px" class="select-container">
                    <el-button>全部</el-button>
                    <el-button type="success" plain>已闭环</el-button>
                    <el-button type="warning" plain>未闭环</el-button>
                </el-aside>

                <el-container>
                    <el-main class="menu-container">

                        <el-row :gutter="20" v-for="index in 10" :key="index" class="menu-item">
                            <el-col :span="7" class="tab-container">
                                <el-button type="primary" plain size="small">14天</el-button>
                                <el-button type="success" plain size="small">已闭环</el-button>
                            </el-col>
                            <el-col :span="16" class="tab-title">
                                <p>如何通过eletron开发出一款自己的app软件？</p>
                            </el-col>
                        </el-row>

                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>

</script>

<style>
.menu-item{
    margin-bottom: 15px;
}
.tab-title p{
    margin-top: 5px;
    color: #333333;
}
.tab-container{
    display: flex;
    flex-direction: row;
}
.header-logo h1 {
    margin-top: 5px;
    color: #1ABC9C;
}

.adddel-container {
    display: flex;
    flex-direction: row;
    justify-content: end;
}

.main-header {
    width: 600px;
    margin-left: auto;
}

.select-container .el-button {
    margin: 7px;
}

.select-container {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
}

.menu-container {
    background-color: white;
    border-radius: 15px;
    border: 1px solid #70707052;

}

.index-container {
    background-color: #FFF9EA;
    width: 100%;
    height: 100vh;
    margin: -10px;
    padding: 0;
    overflow: auto;
}

.main-container {

    margin: auto;
    width: 700px;
    min-height: 600px;
    margin-top: 40px;
}</style>
