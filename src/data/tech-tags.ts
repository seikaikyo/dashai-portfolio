import type { TechTag } from '../types'

export const techTags: TechTag[] = [
  { id: 'angular', label: 'Angular' },
  { id: 'vue3', label: 'Vue 3' },
  { id: 'react', label: 'React' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'primeng', label: 'PrimeNG' },
  { id: 'primevue', label: 'PrimeVue' },
  { id: 'shoelace', label: 'Shoelace' },
  { id: 'fastapi', label: 'FastAPI' },
  { id: 'fastmcp', label: 'FastMCP' },
  { id: 'python', label: 'Python' },
  { id: 'streamlit', label: 'Streamlit' },
  { id: 'neon', label: 'Neon PostgreSQL' },
  { id: 'prisma', label: 'Prisma' },
  { id: 'sqlmodel', label: 'SQLModel' },
  { id: 'vercel', label: 'Vercel' },
  { id: 'render', label: 'Render' },
  { id: 'vite', label: 'Vite' },
  { id: 'opencv', label: 'OpenCV' },
  { id: 'yolo', label: 'YOLO11' },
  { id: 'plotly', label: 'Plotly.js' },
  { id: 'chartjs', label: 'Chart.js' },
  { id: 'clerk', label: 'Clerk SSO' },
  { id: 'gas', label: 'Google Apps Script' },
  { id: 'sheets', label: 'Google Sheets' },
  { id: 'shioaji', label: 'Shioaji API' },
  { id: 'claude', label: 'Claude AI' },
  { id: 'gemini', label: 'Google Gemini' },
  { id: 'mcp', label: 'MCP Server' },
  { id: 'docker', label: 'Docker' },
  { id: 'git', label: 'Git' },
  { id: 'bash', label: 'Bash/Shell' },
  { id: 'github-actions', label: 'GitHub Actions' }
]

export const techTagMap = Object.fromEntries(
  techTags.map(t => [t.id, t])
)
