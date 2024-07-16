const resourcesPath = "./resources/"

const starButtons = document.querySelectorAll('.star');
const watchButtons = document.querySelectorAll('.watch');
const shareButtons = document.querySelectorAll('.share');

[starButtons, watchButtons, shareButtons].forEach( (buttons) => {
    const filenameAppend = "-outline";
    if (!buttons.length){
        return
    }
    buttons.forEach( (button) => {
        button.addEventListener('click', (event) => {
            const buttonAction = button.classList.contains('star') ? 'star' : 
                                button.classList.contains('watch') ? 'watch' :
                                button.classList.contains('share') ? 'share' :
                                null;

            console.log(buttonAction)

            if (buttonAction == 'share'){
                // if (button.classList.contains('hidden')){
                // }
                // else {

                // }
                
                button.nextElementSibling.classList.toggle('hidden');
                button.classList.toggle('hidden');
                return
            }
            
            if (button.classList.contains('added')){
                //remove outline
                const src = button.getAttribute('src');
                const dotFileTypePosition = src.lastIndexOf('.');
                const string = src.substring(0, dotFileTypePosition) + filenameAppend + src.slice(dotFileTypePosition);
                button.setAttribute('src', string);

            }
            else {
                //add outline
                const nameLength = filenameAppend.length;
                const src = button.getAttribute('src');
                const dotFileTypePosition = src.lastIndexOf('.');
                const string = src.substring(0, dotFileTypePosition - nameLength) + src.slice(dotFileTypePosition);
                button.setAttribute('src', string);
            }

            button.classList.toggle('added');
        })
    })
})