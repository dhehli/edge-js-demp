const 
    edge = require('edge-js')

// GetByTokenAsync (string token)

let token = ''

let callAssembly = edge.func({ 
    assemblyFile: 'libs\\IdentityCore.dll',
    typeName: 'IdentityCore.Service.PersonService',
    methodName: 'GetByTokenAsync' 
})

callAssembly(token, (error, result) => {
    
    if (error) throw error

    console.log("result", result)
    
    let model = JSON.parse(result)
    
    model.Data.forEach(element => {
        console.log(element.Firstname + ' ' + element.Lastname)
    })
})