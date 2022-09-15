const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPosts(post, callback) {
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

function create4thPost(post, callback){
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 4000)
}

createPosts({title: 'Post Three', body: 'This is post three'}, getPosts);

create4thPost({title: 'Post Four', body: 'This is post Four'}, getPosts);