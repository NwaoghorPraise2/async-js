const posts = [
{ title: 'post one', body: 'This is post one'},
{ title: 'post two', body: 'This is post two'}

];


getPosts = () => {
 setTimeout( () => {
    let output = " ";
    posts.forEach((post, index) => {
    output += `<li>${post.title}</li>`;
});
document.body.innerHTML = output;
 }, 1000);

};


createPost = (post , callback) => { 
setTimeout(() => {
posts.push(post);
callback();

}, 2000);
};



createPost( {title:'Post Three', body: ' This is post three'}, getPosts);
