printToDom = (toPrint, divId)=>{
    document.getElementById(divId).innerHTML += toPrint;
}

var pies = [
    {
        name:'keyLime pie',
        imageUrl:'https://houseofnasheats.com/wp-content/uploads/2018/04/Chocolate-Cream-Pie-2-7.jpg',
        instructor:"zoe",
        iceCream:'None'
    },
    {
        name:'Butter pie',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
        instructor:"Zoe",
        iceCream:'None'
    },
    {
        name:'Vingar pie',
        imageUrl:'https://www.kingarthurflour.com/sites/default/files/recipe_legacy/4053-3-large.jpg',
        instructor:"Kraig",
        iceCream:'None'
    },
    {
        name:'Honey pie',
        imageUrl:'https://omgchocolatedesserts.com/wp-content/uploads/2014/03/Chocolate-Fudge-Pie-featured-new.jpg',
        instructor:"Mike",
        iceCream:'None'
    }
];
var pieArr = (piesArr)=>{
    for (let i = 0; i < piesArr.length; i++) {
        const pie = piesArr[i];
        const mm = 
            `<div class ="card">
                <p>${pie.name}</p>
                <p>${pie.instructor}</p>
                <img src = "${pie.imageUrl}"></img>                
            <div>`
        printToDom(mm, "pie-id");
        
    }
}
document.getElementById('my-button').addEventListener('click',pieArr);
pieArr(pies);