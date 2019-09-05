let comparaCmThis = function(param){
    console.log(this===param)
}

comparaCmThis(global)

const obj = {}
comparaCmThis=comparaCmThis.bind(obj)


let comparaCmThisArrow= param=> console.log(this===param)
comparaCmThisArrow(global)
comparaCmThisArrow(module.exports)

comparaCmThisArrow= comparaCmThisArrow.bind(obj)
comparaCmThisArrow(obj)