// ts type definition 
type Person = {
    name: string
    age: number
}
const Bamlak: Person = { name: "Bamlak", age: 23}

// Generics in ts
type Human<Employee> = {
    occupation: Employee
}

function promote<P>(name: P) {
    return (typeof name)
}




function ts(){
    return(
        <div className="text-gray-600 flex justify-center flex-col p-12 gap-16">
          <h1 className="text-4xl text-center pb-6">  TypeScript Recap </h1>

            <div className="mx-auto w-1/2">
                <h2 className="text-xl pb-6"> Defining Types in TypeScript</h2>
                <code>
                    type Person = {'{ '}
                        name: string
                        age: number
                        {' }'}
                </code>
                <br/>
                <code>
                    const person: Person = {'{'} {" name: 'Bamlak' age: 29"} {'}'}
                </code>
            </div>

            <div className="mx-auto w-1/2">
                <h2 className="text-xl pb-6"> Generics in TypeScript <br/>
                <span className="text-sm"> 
                    they allow the types of components 
                    and functions to be "SPECIFIED LATER" which allows them to be used 
                    in creating reusable components that can apply to different use cases <br/>
                    TypeScript Generics is a tool for creating reusable components in TypeScript. 
                    Rather than working with a single data type, it builds a component that can 
                    interact with various data kinds. It enables users to consume these components 
                    while also using their own kinds.
                </span>
                </h2>
                
                <code>
                </code>
                <br/>
                <code>
                </code>
            </div>

            <div className="mx-auto w-1/2">
                <h2 className="text-xl pb-6"> Functions in TypeScript <br/>
                <span className="text-sm"> 
                    functions in JS and TS are <i>first-class</i> objects. meaing, they are treated the 
                    same way as other variables and objects. <br/>
                    When <b>functions</b> are passed as an argument to <b>another function</b>, 
                    they are known as a <b> callback </b> — to be called when the other function is ready for them.
                </span>
                </h2>
                
                <code>
                </code>
                <br/>
                <code>
                </code>
            </div>
        </div>
    )
}
export default ts