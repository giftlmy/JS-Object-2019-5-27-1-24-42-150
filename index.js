//1 编程程序，完成下列需求：
 function test1(){
    var user= { //创建一个空对象，变量名为user；
        name: "John", //添加一个name属性，并设置值为John；
        surname: "Mike",// 添加一个surname属性，并设置其值为Mike；
    };
	user.name="Peter";//将name属性的值改为Peter;
	delete user.name;//删除user的name属性
}
// 编写程序，实现下列需求：计算下面fruit对象共有多少个水果，应该输出50。
function test2(){
	var fruit = {
        apple: 20,
        pear: 20,
        peach: 10
    };
    console.log("总共有"+fruit.apple+fruit.pear+fruit.peach+"个水果");
}