export default class TreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }
}

const parent = new TreeNode('Родитель')
const child1 = new TreeNode('Ребёнок 1')
const child2 = new TreeNode('Ребёнок 2')

parent.children.push(child1)
parent.children.push(child2)

const grandChild1 = new TreeNode('Внук 1')
const grandChild2 = new TreeNode('Внук 2')

child1.children.push(grandChild1)
child2.children.push(grandChild2)
