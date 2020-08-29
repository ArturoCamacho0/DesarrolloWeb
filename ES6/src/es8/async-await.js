const helloWorld = () => {
    return new Promise((res, err) => {
        (false) ? setTimeout(() => res('Hello World!'), 3000) : err(new Error('Error'));
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();

    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(err){
        console.log(err);
    }
}

anotherFunction();