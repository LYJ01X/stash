
$httpClient.get('https://searchplugin.csdn.net/api/v1/ip/get?ip', function (error, response, data){
	let jsonData = JSON.parse(data)
	let sj =jsonData.data 
	let address =sj.address
	let ip =sj.ip
	;
	
$done({
    title: '当前国内IP地址',
    content: `${address}\n${ip}`,
  })
 })
