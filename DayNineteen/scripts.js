const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('.2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const video = document.querySelector('.player');

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false
    })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error('OH No!!!!', err);
    });
}

getVideo();

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();
}
