/* Array von Bildern erstellen und die Dateinamen von image_1.jpg bis image_100.jpg  */

let arrayImages = [];

for (let i = 1; i <= 100; i++) {
    //arrayImages[i]= 'image_'+i+'.jpg';
    arrayImages.push('image_' + i + '.jpg');
}


for (let i = 1; i <= 100; i++) {
    console.log('Index : ', i, 'Image : ', arrayImages[i]);
}

console.log('------------------------------------------------------------------------');

console.log(arrayImages);
