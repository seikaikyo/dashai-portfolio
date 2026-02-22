import type { TechTag } from '../types'

export const techTags: TechTag[] = [
  { id: 'angular', label: 'Angular' },
  { id: 'vue3', label: 'Vue 3' },
  { id: 'primeng', label: 'PrimeNG' },
  { id: 'primevue', label: 'PrimeVue' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'fastapi', label: 'FastAPI' },
  { id: 'python', label: 'Python' },
  { id: 'neon', label: 'Neon PostgreSQL' },
  { id: 'sqlmodel', label: 'SQLModel' },
  { id: 'vercel', label: 'Vercel' },
  { id: 'render', label: 'Render' },
  { id: 'vite', label: 'Vite' },
  { id: 'opencv', label: 'OpenCV' },
  { id: 'yolo', label: 'YOLO' },
  { id: 'tensorflow', label: 'TensorFlow' },
  { id: 'gcp', label: 'GCP' },
  { id: 'gas', label: 'Google Apps Script' },
  { id: 'sheets', label: 'Google Sheets' },
  { id: 'finnhub', label: 'Finnhub API' },
  { id: 'claude', label: 'Claude AI' },
  { id: 'mcp', label: 'MCP Server' },
  { id: 'docker', label: 'Docker' },
  { id: 'git', label: 'Git' },
  { id: 'bash', label: 'Bash/Shell' },
  { id: 'csharp', label: 'C#' },
  { id: 'dotnet', label: '.NET' }
]

export const techTagMap = Object.fromEntries(
  techTags.map(t => [t.id, t])
)
