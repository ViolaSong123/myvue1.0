const goodlist = [
    { name: '商品1', price: 220.1, src: require('@/assets/img/common/goods.png'), isActive: !1},
    { name: '商品2', price: 123.1, src: require('@/assets/img/common/goods.png'), isActive: !1},
    { name: '商品3', price: 121, src: require('@/assets/img/common/goods.png'), isActive: !1},
    { name: '商品4', price: 12, src: require('@/assets/img/common/goods.png'), isActive: !1},
    { name: '商品5', price: 222, src: require('@/assets/img/common/goods.png'), isActive: !1},
    { name: '商品6', price: 654, src: require('@/assets/img/common/goods.png'), isActive: !1},
    { name: '商品7', price: 6345, src: require('@/assets/img/common/goods.png'), isActive: !1},
    { name: '商品8', price: 11314, src: require('@/assets/img/common/goods.png'), isActive: !1}
]
// way1 使用exports
// exports.goodlist = goodlist

// way2 使用export
export default{
    goodlist
}