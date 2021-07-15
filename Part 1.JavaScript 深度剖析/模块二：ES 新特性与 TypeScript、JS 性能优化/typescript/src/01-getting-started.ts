const hello = (name: string) => {
    console.log(`hello, ${name}`)
}
hello('tom')

const enum Hello {
    a = 1,
    b,
    c
}

const person = {
    name: 'jj',
    age: Hello.b
}