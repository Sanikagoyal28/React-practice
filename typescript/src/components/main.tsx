function Main(){

    let person = "abcd" 
    // explicitly defining its type
    let age: number;
    let array_of_strings : string[];
    // union is a datatype which can have a number or a string value
    let union : number | string;
    // any: can have data of any type
    let any: any;
    // recommended as compare to any
    let unknown : unknown;

    // object declaration
    type People= {
        name:string, 
        age?:number;
    }
    // name is required and age is optional
    let people : People = {
        name:"abcd"
    }
    // array of object:People
    let lots_of_people : People[] = []
    lots_of_people.push({name:"new"})
    console.log(lots_of_people)


    
    return <>
    <h1>Learning Typescript with React</h1>
    </>
}

export default Main