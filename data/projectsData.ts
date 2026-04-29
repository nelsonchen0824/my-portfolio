interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '大型企業虛擬化平台維運',
    description: `負責超過百台虛擬機器的架構優化與日常維運，確保系統達到 99.9% 的可用性。`,
    imgSrc: '/static/images/google.png', // 之後可以換成自己的圖
    href: 'https://www.google.com',
  },
  {
    title: '資訊安全實施專案',
    description: `針對客戶環境進行弱點掃描與防護加強，成功對抗多起入侵嘗試。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/security-project',
  },
]

export default projectsData
