$httpClient.get('https://api.no0a.cn/api/onenote/query', function (error, response, data){
	let jsonData = JSON.parse(data)
	let onenote =jsonData.onenote 
	;
	
	$done({
    title: '随机一言',
    content: onenote,
    backgroundColor: '#663399',
    icon: 'network',
  })
 })
