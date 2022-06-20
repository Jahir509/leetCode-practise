class node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(root){
        this.root = new node(root)
    }
    print(){
        let traversal = []
        let data = this.recursivePreOrderPrint(this.root,traversal);
        // console.log(data);
        return data
    }
    
    search(val){
        // console.log(this.root)
        if(this.root == null){
            return false
        }
        else{
            return this.recursivePreOrderSearch(this.root,val)
        }
    }
    
    recursivePreOrderSearch(root,val){
        if(root != null){
            if(val === root.value){
                return true
            }
            let left = this.recursivePreOrderSearch(root.left,val)
            let right = this.recursivePreOrderSearch(root.right,val)
            return left || right;
        }
        else{
            return false
        }
    }
    
    recursivePreOrderPrint(start,traversal){
        if(start){
            traversal.push((start.value))
            this.recursivePreOrderPrint(start.left,traversal)
            this.recursivePreOrderPrint(start.right,traversal)
        }
        return traversal
    }
}

tree = new BinaryTree(1)
tree.root.left = new node(2)
tree.root.right = new node(3)
tree.root.left.left =new node(4)
tree.root.left.right =new node(5)

// # Test search
// # Should be True
console.log(tree.search(4))
// # Should be False
console.log(tree.search(6))

// # Test print_tree
// # Should be 1-2-4-5-3
console.log(tree.print())