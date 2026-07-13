/**
 * 心愿单数据
 * completed: true 表示已完成，可记录完成日期和回忆
 */

export const wishes = [
  {
    id: 'wish-1',
    text: '【提示：替换为真实心愿】一起去一个海边城市旅行',
    category: 'places',
    priority: 3,
    addedDate: '2024-09-01',
    completed: false,
    completedDate: '',
    note: ''
  },
  {
    id: 'wish-2',
    text: '【提示：替换为真实心愿】一起做一顿饭',
    category: 'things',
    priority: 2,
    addedDate: '2024-09-01',
    completed: false,
    completedDate: '',
    note: ''
  },
  {
    id: 'wish-3',
    text: '【提示：替换为真实心愿】一起看一场日出',
    category: 'things',
    priority: 1,
    addedDate: '2024-09-01',
    completed: true,
    completedDate: '2024-10-01',
    note: '那天早上很冷，但景色很美。'
  }
]

export function getWishesByCategory(category) {
  return wishes.filter(w => w.category === category)
}
