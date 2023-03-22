<template>
  <div>
    <div id="playerShow">
      <div class="info">
        <h1>玩家1</h1>
        <img src="../assets/player1.png" style="width: 100%;height: 300px;margin-top: 20px"><br>
      </div>
      <div class="info">
        <h1>玩家2</h1>
        <img src="../assets/player2.png" style="width: 100%;height: 300px;margin-top: 20px"><br>
      </div>
      <div class="info">
        <h1>玩家3</h1>
        <img src="../assets/player3.png" style="width: 100%;height: 300px;margin-top: 20px"><br>
      </div>
      <div class="info">
        <h1>玩家4</h1>
        <img src="../assets/player4.png" style="width: 100%;height: 300px;margin-top: 20px"><br>
      </div>
    </div>
    <div id="footer">
      <div id="roomChat-info">
        <h2>房间聊天</h2>
      </div>

      <div id="package">
        <h1>道具栏</h1><br>
        <h3>攻击道具：使用后增加爆炸范围</h3><br>
        <el-tooltip class="item" effect="dark" content="爆炸范围+1" placement="top-start">
          <img src="../assets/attack1.png"width="50px" height="50px">数量：
        </el-tooltip>
        <h3 style="margin-top: 20px">辅助：使用后增加人物移动速度</h3><br>
        <el-tooltip class="item" effect="dark" content="人物速度加一倍" placement="top-start">
          <img src="../assets/speed1.png" width="50px" height="50px">数量：
        </el-tooltip>

      </div>
      <div id="function">
        <el-button type="primary" round icon="el-icon-s-home" style="margin-right: 50px" v-if="isHolder==true" @click="begin()">开始游戏</el-button>

        <el-button type="primary"round  icon="el-icon-check" style="margin-right: 50px" v-if="isHolder==false&&isReady==true" @click="cancelReady()">取消准备</el-button>
        <el-button type="primary"round  icon="el-icon-more" style="margin-right: 50px" v-if="isHolder==false&&isReady==false" @click="ready()">准备游戏</el-button>
        <el-button type="danger" round  icon="el-icon-circle-close" @click="quitRoom()">退出房间</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameRoom.vue",
  data(){
    return{
      isHolder:false,
      isReady:false,
    }
  },
  methods:{
    begin(){

    },
    ready(){
      this.isReady=true
    },
    cancelReady(){
      this.isReady=false;
    },
    quitRoom() {
      this.$router.push('/gameDetail')
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
  border: 0px;
}
#playerShow{
  float: left;
  width: 100%;
  height: auto;
}
.info{
  float: left;
  width: 25%;
}
#footer{
  height: auto;
}
#roomChat-info{
  padding-left: 20px;
  text-align: left;
  float: left;
  height: 355px;
  width: 35%;
}
#package{
  padding-left: 50px;
  text-align: left;
  float: left;
  height: 355px;
  width: 25%;
}
#function{
  padding-top: 300px;
  float: left;
  width: 35%;
}
</style>