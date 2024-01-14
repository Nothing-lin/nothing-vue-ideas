<template>
  <div class="timeLine-container">
    <el-container>
      <el-header class="header-container">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-row :gutter="5">
                <el-col :span="3">
                    <div class="grid-content bg-purple">
                        <el-button size="mini" round icon="el-icon-back" class="backpage-icon"></el-button>
                    </div>
                </el-col>
                <el-col :span="15">
                    <div class="grid-content bg-purple">
                        <h2>如何通过eletron开发出一款自己的app软件？</h2>
                    </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
                <div class="header-button-container">
                    <el-button>新增节点</el-button>
                    <el-button type="warning">流程闭环</el-button>
                    <el-button type="success" disabled>恢复</el-button>
                </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
        <el-main class="timeline-list-container"> 
                <!-- 时间轴 -->
                <div class="block">
                    <el-timeline>

                        <el-timeline-item timestamp="2018年4月12日" placement="top">
                            <template v-slot:dot>
                                <!-- 使用 dot 插槽自定义小圆点 -->
                                <span class="custom-dot">主题</span>
                            </template>
                        <el-card class="custom-card">
                            <el-row :gutter="20">
                                <el-col :span="16">
                                    <div class="grid-content bg-purple">
                                        <h4>学习如何搭建第一个vue开发框架</h4>
                                        <p>王小虎 提交于 2018/4/12 20:46</p>
                                    </div>
                                </el-col>
                            <el-col :span="8">
                                <div class="grid-content bg-purple">
                                    <h4>参考网站</h4>
                                    <ul>
                                        <li><el-link type="success">参考链接1</el-link></li>
                                        <li><el-link type="success">参考链接2</el-link></li>
                                        <li><el-link type="success">参考链接3</el-link></li>
                                    </ul>
                                </div>
                            </el-col>
                            </el-row>
                        </el-card>
                        </el-timeline-item>

                        <el-timeline-item timestamp="2018年4月12日" placement="top">
                            <template v-slot:dot>
                                <!-- 使用 dot 插槽自定义小圆点 -->
                                <span class="custom-dot" style="background-color: rgb(255, 107, 53);">拓展</span>
                            </template>
                        <el-card class="custom-card">
                            <el-row :gutter="20">
                                <el-col :span="16">
                                    <div class="grid-content bg-purple">
                                        <h4>学习如何搭建第一个vue开发框架</h4>
                                        <p>王小虎 提交于 2018/4/12 20:46</p>
                                    </div>
                                </el-col>
                            <el-col :span="8">
                                <div class="grid-content bg-purple">
                                    <h4>参考网站</h4>
                                    <ul>
                                        <li><el-link type="success">参考链接1</el-link></li>
                                        <li><el-link type="success">参考链接2</el-link></li>
                                        <li><el-link type="success">参考链接3</el-link></li>
                                    </ul>
                                </div>
                            </el-col>
                            </el-row>
                        </el-card>
                        </el-timeline-item>

                        <el-timeline-item timestamp="2018年4月12日" placement="top">
                            <template v-slot:dot>
                                <!-- 使用 dot 插槽自定义小圆点 -->
                                <span class="custom-dot">主题</span>
                            </template>
                        <el-card class="custom-card">
                            <el-row :gutter="20">
                                <el-col :span="16">
                                    <div class="grid-content bg-purple">
                                        <h4>学习如何搭建第一个vue开发框架</h4>
                                        <p>王小虎 提交于 2018/4/12 20:46</p>
                                    </div>
                                </el-col>
                            <el-col :span="8">
                                <div class="grid-content bg-purple">
                                    <h4>参考网站</h4>
                                    <ul>
                                        <li><el-link type="success">参考链接1</el-link></li>
                                        <li><el-link type="success">参考链接2</el-link></li>
                                        <li><el-link type="success">参考链接3</el-link></li>
                                    </ul>
                                </div>
                            </el-col>
                            </el-row>
                        </el-card>
                        </el-timeline-item>
                    </el-timeline>
                </div>

        </el-main>
    </el-container>
  </div>
</template>

<script></script>

<style>
.el-card h4{
    margin: 0% !important;
}
.el-timeline-item__wrapper {
    padding-left: 75px !important;
    top: 5px !important;
}
span.custom-dot {
    color: white;
    background-color: rgb(66, 164, 255);
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    margin-left: -25px;
}
.timeline-list-container{
    width: 60%;
    margin: auto;

}
.header-button-container{
    margin-top: 10px;
    margin-left: auto;
    float: inline-end;
}
.backpage-icon{
    margin-top: 15px !important;
}
.header-container h2 {
  color: white;
  font-size: larger;
  margin-left: -40px;
  overflow: auto;
}
.header-container {
  background-color: #1abc9c;
  height: 100px !important;
  padding: 20px !important;
}
.timeLine-container {
  background-color: #fff9ea;
  width: 100%;
  height: 100vh;
  margin: -10px;
  padding: 0;
  overflow: auto;
}

</style>
