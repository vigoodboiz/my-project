function loadScript(src, callback) {
    const script = document.createElement('script');// tạo ra thẻ script
    script.src = src;// tạo ra thuộc tính src
    script.onload = () => callback(script);// sau khi thực hiện xong khai báo thư viện sẽ chạy callback
    script.onerror = () => callback(new Error(`Script load for error for ${src}`));
    document.head.append(script); // truyền vào trong thẻ head
}
loadScript("https://javascript.info/callbacks", function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})