let users = [
    {
        name: "Rahul",
        dp: "https://i.pravatar.cc/150?img=12",
        storyImage: "https://picsum.photos/id/1011/500/700"
    },
    {
        name: "Priya",
        dp: "https://i.pravatar.cc/150?img=47",
        storyImage: "https://picsum.photos/id/1015/500/700"
    },
    {
        name: "Aman",
        dp: "https://i.pravatar.cc/150?img=11",
        storyImage: "https://picsum.photos/id/1016/500/700"
    },
    {
        name: "Sneha",
        dp: "https://i.pravatar.cc/150?img=45",
        storyImage: "https://picsum.photos/id/1027/500/700"
    },
    {
        name: "Vikash",
        dp: "https://i.pravatar.cc/150?img=13",
        storyImage: "https://picsum.photos/id/1035/500/700"
    }
];
let stories = document.querySelector("#stories")


let sum = ''
users.forEach(function(dets){
       sum += `
         <div class="story">
                <img src="${dets.dp}" alt="">
                <h1>${dets.name}</h1>
            </div>
            `
})
stories.innerHTML = sum;





let story = document.querySelectorAll(".story");
let fullscreen = document.querySelector("#full-screen")
let fullscreenimg = document.querySelector("#full-screen img")
let close = document.querySelector("#close")

let timer;

story.forEach(function(elem,index) {

    elem.addEventListener("click", function() {

       showstory(index)

    });

});

close.addEventListener("click",function(){

          clearTimeout(timer);
         fullscreen.style.display = "none"
   });







let prev = document.querySelector("#prev")
let next = document.querySelector("#next")

let currentIndex = 0;


function showstory(index){

    currentIndex = index ;

    clearTimeout(timer)
     
     fullscreen.style.display = "block";
     fullscreenimg.src = users[currentIndex].storyImage;

        timer = setTimeout(() => {
           fullscreen.style.display = "none"
       },3000);
}


next.addEventListener("click",function(){

    if(currentIndex < users.length - 1){

        showstory(currentIndex + 1);

    }
})
prev.addEventListener("click",function(){
    if(currentIndex > 0){
        showstory(currentIndex - 1)
    }
})
