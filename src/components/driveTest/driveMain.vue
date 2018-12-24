<template>
	    <div>
			<div id="top">
				<img src="../../../static/img/driveTest/t0.jpg" alt="" />
			</div>
			<div id="content">
				<div>
					<a href="#/driveTest/driveExam/101" class="t1">模拟考试</a>
					<a href="#/driveTest/driveSel" class="t2">专项练习</a>
					<a href="#/driveTest/specialList" class="t3">题型专攻</a>
				</div>
			</div>
		</div>
</template>

<script>
</script>

<style scoped>
li{
    list-style-type:none;
}
#top {
  width: 100%;
}
#top img {
  width: 100%;
}
#content {
  position: fixed;
  width: 100%;
  top:270px;
}
#content>div{
    margin:0 auto;
    width:710px;
    height:444px;
    background: #fff;
    border-radius: 16px;
    box-sizing: border-box;
    padding:50px 36px;
    box-shadow: 0 0 20px #eee;
}
.t1{
    display: block;
    width:300px;
    height:340px;
    text-decoration: none;
    float: left;
    background: url(../../../static/img/driveTest/t1.png) no-repeat;
    background-size: 306px;
    margin-right:38px;
    border-radius: 10px;
    color:#fff;
    font-size:36px;
    box-sizing: border-box;
    padding:54px 0 0 24px;
}
.t2{
    display: block;
    width:300px;
    height:156px;
    text-decoration: none;
    float: left;
    margin-bottom:36px;
    background: url(../../../static/img/driveTest/t2.png) no-repeat;
    background-size: 300px;
    color:#fff;
    font-size:36px;
    box-sizing: border-box;
    padding:44px 0 0 24px;
}
.t3{
    display: block;
    width:300px;
    height:156px;
    text-decoration: none;
    float: left;
    background: url(../../../static/img/driveTest/t3.png) no-repeat;
    background-size: 300px;
    color:#fff;
    font-size:36px;
    box-sizing: border-box;
    padding:44px 0 0 24px;
}
</style>
