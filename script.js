// Ask for camera permission when the page loads
navigator.mediaDevices.getUserMedia({ video: true }).catch(() => {});

document.getElementById('resolution').addEventListener('change', function() {
    const resolution = this.value;
    const img = document.getElementById('earth-image');
    const caption = document.getElementById('caption');
    const options = document.querySelectorAll('select option');

    // Unlock subsequent options
    if (resolution === '144') {
        options.forEach(option => {
            if (option.value === '360') option.classList.remove('locked');
        });
    } else if (resolution === '360') {
        options.forEach(option => {
            if (option.value === '480') option.classList.remove('locked');
        });
    } else if (resolution === '480') {
        options.forEach(option => {
            if (option.value === '720') option.classList.remove('locked');
        });
    } else if (resolution === '720') {
        options.forEach(option => {
            if (option.value === '1080') option.classList.remove('locked');
        });
    }

    if (resolution === '1080') {
        // Change caption and open camera
        caption.textContent = "It's you love; you are my world";
        caption.style.color = 'red'; // Change color as needed

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                const video = document.createElement('video');
                video.srcObject = stream;
                video.autoplay = true;
                document.getElementById('image-container').innerHTML = '';
                document.getElementById('image-container').appendChild(video);
            });
        }
    } else {
        // Show appropriate image for other resolutions
        img.src = `C:\\Users\\acer\\Downloads\\${resolution}p.jpeg`;
    }
});
