var body = $response.body;
var obj = JSON.parse(body);

obj.data.color = 'green';

body = JSON.stringify(obj); //JavaScript 值转换为 JSON 字符串。
$done({
	body
});
