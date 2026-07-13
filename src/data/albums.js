/**
 * 相册数据
 * 每个相册对应一次约会、旅行或一段时期。
 * photos 数组留空表示暂无照片，之后把图片放入 public/images/albums/ 即可。
 */

export const albums = [
  {
    id: 'our-first-trip',
    title: '【提示：替换为真实相册】第一次旅行',
    dateRange: '2024年10月',
    description: '记录我们第一次一起出去玩的点点滴滴。把旅行照片放到对应目录中。',
    cover: '',
    photoCount: 0,
    photos: []
  },
  {
    id: 'daily-life',
    title: '【提示：替换为真实相册】日常碎片',
    dateRange: '2024年',
    description: '平时在一起时拍下的照片——吃饭、散步、看电影……',
    cover: '',
    photoCount: 0,
    photos: []
  }
]

export function getAlbumById(id) {
  return albums.find(a => a.id === id) || null
}
