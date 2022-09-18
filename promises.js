const posts = [
    {title: 'Post One', body: 'This is post one',createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];


function getPosts(){
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt) / 1000}  seconds ago </li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

    function createPosts(post){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
            posts.push(post);

            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);
        })

    }

  function deletePosts(post,cre){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
        if(posts.value === null){
            reject('Array is empty now');
            }else{
                resolve( posts.pop());
            }
        },1000);
    })
  }
    createPosts({title: 'Post Three', body: 'This is post three'})
   .then(() =>{
    getPosts()
    deletePosts().then(() =>{
        getPosts()
        deletePosts().then(() =>{ 
            getPosts()
            deletePosts().then(() =>{
                getPosts() 
                deletePosts().then(() =>{
                    getPosts()
            }).catch(err => console.log(err))
            })
        })  
})
   }).catch(err => console.log(err))


// Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(resolve, 2000, 'Goodbye'));

// Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
