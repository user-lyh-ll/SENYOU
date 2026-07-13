/**
 * 时间轴数据
 * 每一条事件代表一个值得记录的瞬间。
 * 替换下方的示例数据为你们的真实经历。
 */

export const timelineEvents = [
  {
    id: 'the-day-we-met',
    date: '2024-09-01',
    title: '【提示：替换为真实事件】我们相遇的那一天',
    type: 'milestone',
    summary: '写下你们第一次相遇的场景——在哪里、什么时间、第一印象如何……',
    content: '这里填写详细的回忆内容。可以用 Markdown 语法。'
      + '\n\n用空行分段，让内容更易读。'
      + '\n\n可以写很多细节——对方穿了什么衣服、说过什么话、当时的心情……',
    photos: [],
    location: '【提示：填写地点】',
    mood: '\uD83D\uDC95',
    tags: ['相遇', '第一次']
  },
  {
    id: 'first-date',
    date: '2024-09-15',
    title: '【提示：替换为真实事件】第一次约会',
    type: 'milestone',
    summary: '描述第一次约会去了哪里、做了什么、有什么有趣的事……',
    content: '第一次约会的详细记录。去了哪里、吃了什么、聊了什么话题……',
    photos: [],
    location: '【提示：填写地点】',
    mood: '\uD83D\uDE0A',
    tags: ['约会', '第一次']
  },
  {
    id: 'first-trip',
    date: '2024-10-01',
    title: '【提示：替换为真实事件】第一次一起旅行',
    type: 'photo',
    summary: '记录你们第一次一起出去玩的经历，可以放照片。',
    content: '旅行的详细记录……',
    photos: [],
    location: '【提示：填写地点】',
    mood: '\uD83C\uDF89',
    tags: ['旅行']
  },
  {
    id: 'everyday-happiness',
    date: '2024-10-15',
    title: '【提示：替换为真实事件】日常小幸福',
    type: 'text',
    summary: '记录一个日常的小瞬间——一次散步、一顿一起做的饭、一个有趣的对话……',
    content: '记录那些微小但珍贵的日常时刻。',
    photos: [],
    location: '',
    mood: '\u2600\uFE0F',
    tags: ['日常']
  }
]

export function getEventById(id) {
  return timelineEvents.find(e => e.id === id) || null
}

export function getYears() {
  const years = [...new Set(timelineEvents.map(e => e.date.slice(0, 4)))]
  return years.sort((a, b) => b - a)
}

export function filterByYear(year) {
  if (!year) return timelineEvents
  return timelineEvents.filter(e => e.date.startsWith(year))
}

export function filterByType(type) {
  if (!type || type === 'all') return timelineEvents
  return timelineEvents.filter(e => e.type === type)
}

export function getRandomEvent() {
  const idx = Math.floor(Math.random() * timelineEvents.length)
  return timelineEvents[idx]
}
