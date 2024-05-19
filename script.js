const keys = document.querySelectorAll('.key');

keys.forEach(key => {

        // Here you can define what happens when a key is clicked
        console.log(`Clicked ${key.textContent}`);
    });
});
