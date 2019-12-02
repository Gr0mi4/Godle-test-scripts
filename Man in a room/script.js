'use strict';
let canvas = document.getElementById("main-screen");
let ctx = canvas.getContext("2d");


let xCoord = 335;
let yCoord = 335;
let xAcceleration = 0;
let yAcceleration = -2;
let movementUpBlocked = false;

let engageAutoPilotButton = document.querySelector('.engageAutoPilot');

function drawRoom() {
    for (let i = 1; i < 7; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineTo(0, (canvas.height /7)*i);
        ctx.lineTo(canvas.width, (canvas.height /7)*i);
        ctx.stroke();
        ctx.closePath();
    }

    for (let i = 1; i < 7; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineTo( ((canvas.width /7)*i), 0);
        ctx.lineTo( ((canvas.width /7)*i), canvas.height);
        ctx.stroke();
        ctx.closePath();
    }
}

function drawBodyHeadUp() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawRoom();

    //Тело
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(xCoord, yCoord, 40, 30);
    ctx.closePath();


    //Правая рука
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.rect(xCoord - 10, yCoord - 20, 10, 40);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Левая рука
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.rect(xCoord + 40, yCoord - 20, 10, 40);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Голова
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(xCoord + 20, yCoord + 15, 15, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();

    //xCoord += xAcceleration;
    //yCoord += yAcceleration;
    if (yCoord <= 10) {
        yAcceleration = 0;
    }
}

function drawBodyHeadDown() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawRoom();

    //Тело
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(xCoord, yCoord, 40, 30);
    ctx.closePath();


    //Правая рука
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.rect(xCoord - 10, yCoord + 5, 10, 40);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Левая рука
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.rect(xCoord + 40, yCoord + 5, 10, 40);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Голова
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(xCoord + 20, yCoord + 15, 15, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();

    //xCoord += xAcceleration;
    //yCoord += yAcceleration;
    if (yCoord <= 10) {
        yAcceleration = 0;
    }
}

function drawBodyHeadRight() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawRoom();

    //Тело
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(xCoord, yCoord, 30, 40);
    ctx.closePath();


    //Правая рука
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.rect(xCoord + 5, yCoord -10, 40, 10);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Левая рука
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.rect(xCoord + 5, yCoord + 40, 40, 10);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Голова
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(xCoord + 15, yCoord + 20, 15, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
}

function drawBodyHeadLeft() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawRoom();

    //Тело
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(xCoord, yCoord, 30, 40);
    ctx.closePath();


    //Правая рука
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.rect(xCoord - 20, yCoord -10, 40, 10);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Левая рука
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.rect(xCoord - 20, yCoord + 40, 40, 10);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Голова
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(xCoord + 15, yCoord + 20, 15, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
}

drawBodyHeadUp();

function check() {
    if (yCoord === 35) {
        movementUpBlocked = true;
    }
    else if (yCoord > 35) {
        movementUpBlocked = false;
    }
}

function moveUp() {
  if (yCoord > 35) {
    yCoord -= 100;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBodyHeadUp();
  }
  else if (yCoord === 35)
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBodyHeadUp();
  }
}

function moveDown() {
  if (yCoord < 635) {
    yCoord += 100;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBodyHeadDown();
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBodyHeadDown();
  }
}

function moveRight() {
    if (xCoord < 635) {
        xCoord += 100;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        drawBodyHeadRight();
    }
    else {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        drawBodyHeadRight();
    }
}

function moveLeft() {
  if (xCoord > 35) {
    xCoord -= 100;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBodyHeadLeft();
  }
  else {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBodyHeadLeft();
  }
}

function movement(event) {
    if (event.code === 'ArrowUp') {
        moveUp();
    } else if (event.code === 'ArrowDown') {
        moveDown();
    } else if (event.code === 'ArrowRight') {
        moveRight();
    } else if (event.code === 'ArrowLeft') {
        moveLeft();
    }
    console.log('X = ' + xCoord);
    console.log('Y = ' + yCoord);
}

let moveIntervalId;

function autoPilot() {
    console.log('Автопилот включен');
    moveIntervalId = setInterval(autoMove, 1000);
}

function autoMove() {
    if (yCoord > 35 && xCoord !== 35 && yCoord !== 635
        || xCoord === 635 && yCoord === 635) {
        moveUp();
    }
    else if (yCoord === 35 && xCoord > 35) {
        moveLeft();
    }
    else if (xCoord === 35 && yCoord < 635) {
        moveDown();
    }
    else if (yCoord === 635 && xCoord < 635) {
        moveRight()
    }
}

engageAutoPilotButton.addEventListener('click', autoPilot, false);
window.addEventListener('keydown', movement, false);


