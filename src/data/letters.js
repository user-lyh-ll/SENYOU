/**
 * 情书 / 信件数据
 * 每封信需要指定标题、日期、写信人和正文。
 * 如果 isPrivate 为 true，列表页会隐藏正文摘要。
 */

export const letters = [
  {
    id: 'first-letter',
    title: '【提示：替换为真实信件标题】给你写的第一封信',
    date: '2024-09-10',
    from: '宇晗',
    to: '淋',
    summary: '开头的一句话摘要……',
    content: '这里写信件的完整内容。\n\n用空行分段。\n\n写下你写这封信时的想法。',
    isPrivate: false
  }
]

export function getLetterById(id) {
  return letters.find(l => l.id === id) || null
}
