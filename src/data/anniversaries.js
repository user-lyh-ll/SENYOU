/**
 * 纪念日数据
 * 修改 startDate 为你们在一起的那一天。
 * events 里添加你们自定义的纪念日。
 */

export const relationshipStart = {
  date: '2024-09-01',
  label: '在一起'
}

export const anniversaryEvents = [
  {
    id: 'first-date-ann',
    date: '2024-09-15',
    label: '第一次约会',
    note: '【提示：填写一句对这个日子的描述】',
    photo: ''
  },
  {
    id: 'birthday-yuhao',
    date: '1999-01-01',
    label: '宇晗的生日',
    note: '【提示：把日期改成真实生日】',
    photo: ''
  },
  {
    id: 'birthday-lin',
    date: '2005-05-07',
    label: '淋淋的生日',
    note: '',
    photo: ''
  }
]

export function getDaysSince(start) {
  const startDate = new Date(start)
  const today = new Date()
  const diff = today.getTime() - startDate.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export function getDaysUntil(target) {
  const targetDate = new Date(target)
  const today = new Date()
  targetDate.setFullYear(today.getFullYear())
  if (targetDate < today) {
    targetDate.setFullYear(today.getFullYear() + 1)
  }
  const diff = targetDate.getTime() - today.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}
