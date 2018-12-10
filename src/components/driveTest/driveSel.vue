<template>
	    <div id="sel">
			<div>
				<a href="#/driveTest/test/1/null" class="t1">判断题</a>
				<a href="#/driveTest/test/2/null" class="t2">选择题</a>
			</div>
		</div>
</template>

<script>
</script>

<style scoped>
i{
    list-style-type:none;
}
#sel{
    padding-top:40px;
    width:100%;
}
#sel div{
    margin:0 auto;
    width:710px;
    height:424px;
    background: #fff;
    border-radius: 16px;
    box-sizing: border-box;
    padding:54px 36px;
    box-shadow: 0 0 20px #eee;
    display: flex;
}
#sel .t1{
    display: block;
    width:300px;
    height:320px;
    text-decoration: none;
    background: url(../../../static/img/driveTest/t4.png) no-repeat;
    background-size: 300px;
    margin-right:36px;
    border-radius: 10px;
    color:#fff;
    font-size:36px;
    box-sizing: border-box;
    padding:58px 0 0 36px;
}
#sel .t2{
    display: block;
    width:300px;
    height:320px;
    text-decoration: none;
    background: url(../../../static/img/driveTest/t5.png) no-repeat;
    background-size: 300px;
    border-radius: 10px;
    color:#fff;
    font-size:36px;
    box-sizing: border-box;
    padding:58px 0 0 36px;
}
</style>