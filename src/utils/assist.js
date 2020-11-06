// 由一个组件,向上找到最近的指定组件
export function findComponentUpward(context, componentName) {
    let parent = context.$parent
    let name = parent.$options.name

    // 这里为什么用indexOf,而不用===
    while (parent && (!name || [componentName].indexOf(name) === -1)) {
        parent = parent.$parent
        if (parent) name = parent.$options.name
    }

    return parent
}

// 递归的思想 ,找到一个以后以这个为开始重新找
export function findComponentsUpward(context, componentName) {
    let parents = []
    let parent = context.$parent

    if(parent){
        if(parent.$options.name === componentName){
            parents.push(parent)
        }
        return parents.concat(findComponentsUpward(parent,componentName))
    }else{
        return []
    }
}