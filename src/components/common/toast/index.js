import Toast from './toast'
const obj = {}

obj.install = function (Vue){
    // 1.创建组件构造器
    const toastContrustor = Vue.extend(Toast)
    // 2.使用new 的方式，根据组件构造器，创建出一个组件对象
    const toast = new toastContrustor()
    // 3.将组件对象挂载到某个对象上面
    toast.$mount(document.createElement('div'))
    //4.toast.$el 对应的就是div
    document.body.appendChild(toast.$el)

    // 将toast挂载到vue原型上面
    Vue.prototype.$toast = toast
}
export default obj