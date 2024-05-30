document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('whatsapp-button');

    button.addEventListener('mousedown', (e) => {
        e.preventDefault();
        let shiftX = e.clientX - button.getBoundingClientRect().left;
        let shiftY = e.clientY - button.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            button.style.left = pageX - shiftX + 'px';
            button.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        button.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            button.onmouseup = null;
        };
    });

    button.ondragstart = function() {
        return false;
    };
});