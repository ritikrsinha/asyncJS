const posts = [
    {title: 'Post One', body: 'This is post one',createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];

var intervalId;
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
            posts.push({...post, createdAt: new Date().getTime()});

            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);
        })

    }

  function deletePosts(){
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


    const user = { username: 'ritik', lastactivitytime: '17th of sept'};
    
    function updatelastactivitytime(post){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                user.lastactivitytime = new Date().getTime;
                if(posts !== 0){
                resolve(user.lastactivitytime) ;               
                }else{
                    reject('Array is empty now'); 
                }
            },1000);
        })
      }
    
    
     createPosts({title: 'Post Four', body: 'This is post four'}, getPosts)
     function userupdatepost(posts){
        Promise.all([createPosts, updatelastactivitytime])
        .then(([updatelastactivitytimeresolves]) =>{
            console.log(updatelastactivitytimeresolves)
        })
        .catch(err => console.log(err))
      };