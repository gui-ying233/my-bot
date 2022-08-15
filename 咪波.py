import requests

urlTitleList = []
urlList = []
title = ''

titles = 'File:头像 敌人 自走车.png'

while 1:
    try:
        result0 = requests.get('https://m.prts.wiki/api.php',
                               params={
                                   'action': 'query',
                                   'prop': 'imageinfo',
                                   'titles': titles,
                                   'iiprop': 'url',
                                   'format': 'json',
                                   'formatversion': 'latest'
                               })
        break
    except Exception as e:
        print(str(e), "重试...")
result = result0.json()['query']['pages']

for _ in range(len(result)):
    title = result[_]['title'][3:]
    try:
        if result[_]['missing']:
            print(f'【{_ + 1}/{len(result)}】\t{title}\t未找到文件')
    except Exception as e:
        if title[:4] == '模组类型':
            title = 'AkModuleType' + title[4:]
        elif title[:3] == '半身像' or title[:2] == '立绘' or title[:2] == '地图' or title[:2] == '技能' or title[:5] == '道具 带框' or title[:2] == '模组' or title[:2] == '图标':
            title = '明日方舟' + title
        elif title[:2] == '道具' or title[:2] == '主题' and title[-6:-4] == '总览':
            title = '明日方舟 ' + title
        elif title[:2] == '头像':
            title = '明日方舟 tx' + title[2:]
        elif title[:5] == '情报处理室':
            title = '明日方舟剧情 ' + title[6:]
        try:
            print(f'【{_ + 1}/{len(result)}】\t{title}\t下载中...')
            open('/Users/emmm/Desktop/明日方舟/图片/'+title, "wb").write(
                requests.get(result[_]['imageinfo'][0]['url']).content)
            print('\t下载完成')
        except Exception as e:
            print(str(e), "下载失败")
print('进程结束')