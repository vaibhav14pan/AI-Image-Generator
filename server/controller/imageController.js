export const dummyResponse = (req, res) => {
    res.send('App is running...')
}

export const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;
    const response = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTQ5OTA4MjYsImV4cCI6MTcxNTA3NzIyNn0.w-hh8NMSlrR_wcbrSde2zs4rkEQi2yoLrGstq5vc5OE",
            "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundarytNjnftR4BUSyXAAN",
            "sec-ch-ua": "\"Opera\";v=\"109\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://hotpot.ai/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `------WebKitFormBoundarytNjnftR4BUSyXAAN\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundarytNjnftR4BUSyXAAN\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundarytNjnftR4BUSyXAAN\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundarytNjnftR4BUSyXAAN\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundarytNjnftR4BUSyXAAN\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundarytNjnftR4BUSyXAAN\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundarytNjnftR4BUSyXAAN\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundarytNjnftR4BUSyXAAN\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundarytNjnftR4BUSyXAAN\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-nAwinZAkz0S5kvc\r\n------WebKitFormBoundarytNjnftR4BUSyXAAN\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-nAwinZAkz0S5kvc.png\r\n------WebKitFormBoundarytNjnftR4BUSyXAAN--\r\n`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

    // console.log("body::", body);

    const image = await response.json();
    res.json({
        status: "success",
        image: image,
    });
}