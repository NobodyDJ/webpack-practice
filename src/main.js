import count from './js/count.js'
import sum from './js/sum.js'
// 需要打包的文件，要导入main.js中
import './css/index.css'
import './less/index.less'
import './sass/index.scss'

console.log(count(1, 2));
console.log(sum(1, 2, 3, 4, 5));