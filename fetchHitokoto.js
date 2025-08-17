fetch('https://api.hapuren.cn/ht/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('hitokoto').textContent = data.hitokoto;
        if (data.from) {
            document.getElementById('from').textContent = "——" + data.from;
        } else {
            document.getElementById('from').textContent = "";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('hitokoto').textContent = "加载失败，请稍后再试";
        document.getElementById('from_who').textContent = "";
    });