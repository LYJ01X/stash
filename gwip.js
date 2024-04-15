
$httpClient.get('http://ip-api.com/json?lang=zh-CN', function (error, response, data){
	let jsonData = JSON.parse(data)
	let country =jsonData.country 
	let query =jsonData.query
	;
	
$done({
    title: '当前国外IP地址',
    content: `${country}\n${query}`,
  })
 })
