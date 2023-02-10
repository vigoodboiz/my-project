function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');// tạo ra thẻ script
        script.src = src;// tạo ra thuộc tính src
        script.onload = () => resolve(10);// sau khi thực hiện xong khai báo thư viện sẽ chạy callback
        script.onerror = () => reject(new Error(`Script load for error for ${src}`));
        document.head.append(script); // truyền vào trong thẻ head
    })
}
loadScript("https://javascript.info/callbacks")
    .then((data) => data + "Anh yeu em")
    .then((data2) => data2 + "Anh rat yeu em")
    .then((data3) => console.log(data3))
    .catch((error) => console.log(error));