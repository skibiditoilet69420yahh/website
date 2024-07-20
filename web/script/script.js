function message() {
    let name = document.getElementById("user").value;
    let message = document.getElementById("content").value;

    const webhook = "https://discord.com/api/webhooks/1264222097383620618/ayPcP9EL-q0gtRU5kv1iztFf5kllPmGRYhNKhWp5L5PBt4Zs12iy9vR9l4TVpVT__YQ6";
    const contents = `Name: ${name}\nMessage: ${message}`;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        "content": null,
        "embeds": [
            {
            "title": "Someone has contacted you",
            "description": contents,
            "color": 16250871
            }
            ],
            "attachments": []
    }
    request.send(JSON.stringify(params));
}