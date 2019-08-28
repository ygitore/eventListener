printToDom = (toPrint, divId)=>{
    document.getElementById(divId).innerHTML = toPrint;
}

var pies = [
    {
        name:'keyLime pie',
        imageUrl:'https://houseofnasheats.com/wp-content/uploads/2018/04/Chocolate-Cream-Pie-2-7.jpg',
        instructor:'zoe',
        iceCream:'None'
    },
    {
        name:'Butter pie',
        imageUrl:'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg',
        instructor:'zoe',
        iceCream:'None'
    },
    {
        name:'Vingar pie',
        imageUrl:'https://www.kingarthurflour.com/sites/default/files/recipe_legacy/4053-3-large.jpg',
        instructor:"greg",
        iceCream:'None'
    },
    {
        name:'Honey pie',
        imageUrl:'https://omgchocolatedesserts.com/wp-content/uploads/2014/03/Chocolate-Fudge-Pie-featured-new.jpg',
        instructor:"mike",
        iceCream:'None'
    },
    {
        name:'Honey pie',
        imageUrl:'https://omgchocolatedesserts.com/wp-content/uploads/2014/03/Chocolate-Fudge-Pie-featured-new.jpg',
        instructor:"callan",
        iceCream:'None'
    }

];
var pieBuilder = (piesArr)=>{
    let domString = '';
    for (let i = 0; i < piesArr.length; i++) {
        const pie = piesArr[i];
        domString += 
            `<div class ="card">
                <p>${pie.name}</p>
                <p>${pie.instructor}</p>
                <img src = "${pie.imageUrl}"></img>                
            <div>`        
    }
    
    printToDom(domString, "pie-id");
}
/*
document.getElementById('person-zoe').addEventListener('click',()=>{
    //first figure out who the instructor is for the button we click
    const instructor = 'zoe';
    //only get those pies from the list of all pies
    const zoesPies = [];
    for (let i = 0; i < pies.length; i++) {
        const pie = pies[i];
        if(pie.instructor === instructor){
            zoesPies.push(pie);
        }
        
    }
    //pass small list of pies back into the pie builder
    pieArr(zoesPies);
});
pieArr(pies);
*/

// document.getElementById('person-zoe').addEventListener('click',(e)=>{
//     //first figure out who the instructor is for the button we click
//     const instructor = e.target.id;
//     //only get those pies from the list of all pies
//     const zoesPies = [];
//     for (let i = 0; i < pies.length; i++) {
//         const pie = pies[i];
//         if(pie.instructor === instructor){
//             zoesPies.push(pie);
//         }
        
//     }
//     //pass small list of pies back into the pie builder
//     pieArr(zoesPies);
// });
var buttonClick = (e)=>{
    //first figure out who the instructor is for the button we click
    const instructor = e.target.id;
    //only get those pies from the list of all pies
    const selectPies = [];
    for (let i = 0; i < pies.length; i++) {
        const pie = pies[i];
        if(pie.instructor === instructor){
            selectPies.push(pie);
        }
        
    }
    //pass small list of pies back into the pie builder
    pieBuilder(selectPies);
};
document.getElementById('all').addEventListener('click', buttonClick);

document.getElementById('zoe').addEventListener('click',buttonClick);
document.getElementById('mike').addEventListener('click',buttonClick);