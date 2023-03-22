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
        <h3>攻击道具：使用后使炸弹的爆炸范围+1格</h3><br>
        <img src="../assets/attack1.png">数量：
        <h3 style="margin-top: 20px">辅助：使用后人物移动速度翻一倍</h3><br>
        <img src="../assets/speed1.png">数量：
      </div>
      <div id="function">
        <el-button type="primary" round icon="el-icon-s-home" style="margin-right: 50px" @click="createRoom">开始游戏</el-button>
        <el-button type="primary"round  icon="el-icon-s-home" style="margin-right: 50px" @click="createRoom">准备游戏</el-button>
        <el-button type="danger" round icon="el-icon-circle-plus">退出房间</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameRoom.vue"
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