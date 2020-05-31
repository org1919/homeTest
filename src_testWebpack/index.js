import indexCss from './public/css/index.css'
import imgSrc from './public/imgs/3.jpg'  //本质上拿到的是图片的路径

let pp = document.createElement('p')
pp.innerText = '我爱你赵丽颖'
document.getElementById('root').appendChild(pp)

let myFunc = () => {
    console.log('嘿嘿')
}

myFunc()

//创建图片

let imgNode = new Image()  //
imgNode.src = imgSrc
document.getElementById('root').appendChild(imgNode)

let a = 100
console.log(a)
