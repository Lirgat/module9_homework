const input = document.querySelector("input");
const submitButton = document.querySelector("button");
const outputSpan = document.querySelector("span");
const photoContainer = document.querySelector("div");

submitButton.addEventListener("click", submitButtonHandle);

function submitButtonHandle() {
    const value = input.value;

    if (value >= 1 && value <= 10 && !isNaN(value)) {
        useRequest(" https://picsum.photos/v2/list?limit=" + value, loadPhotos);
        write("Загружаю фото...");
    } else {
        write("Число вне диапазона от 1 до 10");
    }
}

function write(text) {
    outputSpan.innerHTML = text;
}

function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            write("Статус ответа: ", xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
            write("Фото загружены.");
        }
    };

    xhr.onerror = function() {
        write("Ошибка! Статус ответа: ", xhr.status);
    };

    xhr.send();
};

function loadPhotos(apiData) {
    let cards = String();

    apiData.forEach(item => {
        const cardblock =     `<div>
                                    <img
                                    src="${item.download_url}"
                                    style="width: 150px; margin-right: 30px"
                                    />
                                    <p>${item.author}</p>
                                </div>`;
        cards += cardBlock;
    });

    photoContainer.innerHTML = cards;
}