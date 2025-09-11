let home = [22,11,33,65,45,44,[11,22,55,44]]

let myHome = [];

function dima(yana){
    for(const item of yana){
        if (Array.isArray(item)){
            dima(item);
        }else {
            myHome.push(item);
        }
    }
}
dima(home);

console.log(myHome);