$httpClient.get('https://searchplugin.csdn.net/api/v1/ip/get?ip', function (error, response, data) {
  $done({
    title: '当前 IP 地址',
    content: data,
    backgroundColor: '#663399',
    icon: 'network',
  })
})
