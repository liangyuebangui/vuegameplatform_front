<template>
  <div>
    <div id="detail">
      <div id="info">
        <h1>泡泡堂</h1>
        <img src="../assets/ppt1.jpg" style="width: 55%;height: 300px;margin-top: 20px"><br>
        <el-button-group style="margin-top: 20px">
          <el-button type="primary" icon="el-icon-s-home" style="margin-right: 50px" @click="createRoom">创建房间</el-button>
          <el-button type="primary" icon="el-icon-circle-plus">加入房间</el-button>
        </el-button-group>
        <div id="introduce">
          <h2>游戏介绍</h2>
          <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;遥远的哈巴森林里有一个村落，善良的村民天生被赋予一种神奇的本领：制造神奇水泡。村子里的孩子们从小以玩水泡为乐。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是有一天，灾难降临在这个和平的村子，海盗船长和他的手下们夺走了宝石，还把大人们全都关在了一个很远的地方。
          被大人们藏起来的孩子们幸免于难。他们决心要利用他们的神奇水泡，拯救他们的亲人并夺回被抢的宝石。
          </span>
        </div>
        <div id="gameRule">
          <h2>操作方法</h2>
          <span>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 玩家操作角色WASD进行移动，空格键放炸弹，利用炸弹消灭除自己以外的其他玩家以获得积分。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每局游戏分为三小场，三场游戏结束后，根据积分颁发奖励
          </span>
        </div>
      </div>
    </div>
    <div id="worldChat">
      <h1 >世界聊天</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameDetail.vue",
  data(){
    return{

    }
  },
  methods:{
    createRoom(){
      this.$router.push('gameRoom')
    }
  },
  created() {
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#detail{
  float: left;
  width: 60%;
  height: auto;
}
#info{
  float: left;
  width: 100%;
}
#options{
  /*float: right;*/
  /*background-color: blue;*/
  width: 20%;
}
#gameRule{
  margin-top: 20px;
  margin-left: 50px;
  text-align: left;
  height: auto;
}
#introduce{
  margin-top: 20px;
  margin-left: 50px;
  text-align: left;
  height: auto;
}
#worldChat{
  float: right;
  background-color: gray;
  width: 38%;
  height: 715px;
}
</style>