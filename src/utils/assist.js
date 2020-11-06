// 由一个组件,向上找到最近的指定组件
export function findComponentUpward(context, componentName) {
    let parent = context.$parent
    let name = parent.$options.name

    // componentName不是数组, 可以不用indexOf
    while (parent && (!name || componentName !== name)) {
        parent = parent.$parent
        if (parent) name = parent.$options.name
    }

    return parent
}
// findComponentUpward 递归版本
export function findComponentUpward2(context, componentName) {
    const parent = context.$parent
    let findParent = null
    if (parent) {
        const name = parent.$options.name
        if (name === componentName) {
            findParent = parent
        } else {
            findParent = findComponentUpward2(parent, componentName)
        }
    }
    return findParent
}

// 递归的思想 ,找到一个以后以这个为开始重新找
export function findComponentsUpward(context, componentName) {
    let parents = []
    let parent = context.$parent

    if (parent) {
        if (parent.$options.name === componentName) {
            parents.push(parent)
        }
        return parents.concat(findComponentsUpward(parent, componentName))
    } else {
        return []
    }
}

// 向下找到最近的指定组件
export function findComponentDownward(context, componentName) {
    const childrens = context.$children
    let children = null

    if (childrens.length) {
        for (const child of childrens) {
            const name = child.$options.name
            if (name === componentName) {
                children = child
                break
            } else {
                children = findComponentDownward(child, componentName)
                if (children) break
            }
        }
    }
    return children
}